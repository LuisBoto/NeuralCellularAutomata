class MainLayer {

    constructor() {
        this.initiate();
    }

    initiate() {
        this.populateCellGrid()
        this.generateUpdateAndDrawKernels();
    }

    update() {
        let cellTexture = this.updateCellMatrix(rowNumber, columnNumber, this.cells, kernel);
        if (this.cells.delete) this.cells.delete();
        this.cells = cellTexture;
    }

    draw() {
        this.paintCells(this.cells);
    }

    populateCellGrid() {
        this.cells = [];
        for (let i = 0; i < rowNumber; i++) {
            this.cells[i] = []
            for (let j = 0; j < columnNumber; j++)
                this.cells[i].push(Math.random()*2-1);
        }
    }

    generateUpdateAndDrawKernels() {
        this.gpu = new GPU({ canvas, context: gl });
        this.updateCellMatrix = this.gpu.createKernel(function(rowNumber, columnNumber, cellMatrix, kernelValues) {
            let xMinusOne = this.thread.x == 0 ? rowNumber-1 : Math.floor(this.thread.x-1);
            let xPlusOne = this.thread.x == rowNumber-1 ? 0 : Math.floor(this.thread.x+1);
            let yMinusOne = this.thread.y == 0 ? columnNumber-1 : Math.floor(this.thread.y-1);
            let yPlusOne = this.thread.y == columnNumber-1 ? 0 : Math.floor(this.thread.y+1);

            let updatedValue = cellMatrix[this.thread.y][this.thread.x]*kernelValues[1][1]
                        + cellMatrix[yMinusOne][this.thread.x] * kernelValues[0][1]
                        + cellMatrix[this.thread.y][xMinusOne] * kernelValues[1][0]
                        + cellMatrix[yMinusOne][xMinusOne] * kernelValues[0][0]
                        + cellMatrix[yPlusOne][this.thread.x] * kernelValues[2][1]
                        + cellMatrix[this.thread.y][xPlusOne] * kernelValues[1][2]
                        + cellMatrix[yPlusOne][xPlusOne] * kernelValues[2][2]
                        + cellMatrix[yMinusOne][xPlusOne] * kernelValues[0][2]
                        + cellMatrix[yPlusOne][xMinusOne] * kernelValues[2][0];
            //updatedValue = updatedValue > 1.0 ? 1.0 : updatedValue < 0 ? 0 : updatedValue;
            return -1/(0.89*Math.pow(updatedValue, 2)+1)+1;
        }, { immutable: true })
        .setOutput([columnNumber, rowNumber])
        .setPipeline(true);

        this.paintCells = this.gpu.createKernel(function(cellMatrix) {
            let cellValue = cellMatrix[this.thread.y][this.thread.x];
            cellValue > 0.1 ? this.color(150*cellValue, 140*cellValue, 0, 1) : this.color(0,0,0);
        }).setOutput([columnNumber, rowNumber])
          .setGraphical(true);
    }
}
