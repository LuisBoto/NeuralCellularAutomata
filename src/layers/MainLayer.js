class MainLayer {

    constructor() {
        this.initiate();
    }

    initiate() {
        this.recreateCellMatrix();
        this.gpu = new GPU({
            canvas,
            context: gl
          });
        this.updateCellMatrix = this.gpu.createKernel(function(columnNumber, rowNumber, cellMatrix, kernelValues) {
            let updatedValue = 0;

            let iMinusOne = this.thread.y-1;
            if (this.thread.y == 0)
                iMinusOne = columnNumber-1;

            let iPlusOne = this.thread.y+1;
            if (this.thread.y == columnNumber-1)
                iPlusOne = 0;
            
            let jMinusOne = this.thread.x-1;
            if (this.thread.x == 0)
                jMinusOne = rowNumber-1;

            let jPlusOne = this.thread.x+1;
            if (this.thread.x == rowNumber-1) 
                jPlusOne = 0;

            updatedValue = 
                        cellMatrix[this.thread.y][this.thread.x]*kernelValues[1][1]
                        + cellMatrix[iMinusOne][this.thread.x] * kernelValues[0][1]
                        + cellMatrix[this.thread.y][jMinusOne] * kernelValues[1][0]
                        + cellMatrix[iMinusOne][jMinusOne] * kernelValues[0][0]
                        + cellMatrix[iPlusOne][this.thread.x] * kernelValues[2][1]
                        + cellMatrix[this.thread.y][jPlusOne] * kernelValues[1][2]
                        + cellMatrix[iPlusOne][jPlusOne] * kernelValues[2][2]
                        + cellMatrix[iMinusOne][jPlusOne] * kernelValues[0][2]
                        + cellMatrix[iPlusOne][jMinusOne] * kernelValues[2][0];
            return updatedValue > 1.0 ? 1.0 : updatedValue < 0.0 ? 0.0 : updatedValue;
        }).setOutput([rowNumber, columnNumber]);

        this.paintCells = this.gpu.createKernel(function(cellMatrix) {
            this.color(100, 100, 0, 255*cellMatrix[this.thread.y][this.thread.x]);
        }).setOutput([columnNumber, rowNumber])
          .setGraphical(true);
    }

    update() {
        //let updateTime = Date.now();
        this.cells = this.updateCellMatrix(columnNumber, rowNumber, this.cells, kernel);
        //console.log("Update: "+(Date.now()-updateTime));
    }

    draw() {
        //console.log(this.cells);
        this.paintCells(this.cells);
        
        /*let newCanvas = this.paintCells.canvas;
        canvas.parentNode.replaceChild(newCanvas, canvas);
        canvas = newCanvas;*/
    }

    populateCellArray() {
        for (let i = 0; i < columnNumber; i++) {
            this.cells[i] = []
            for (let j = 0; j < rowNumber; j++)
                this.addNewCell(i, j);
        }
       /* for (let i = 0; i < columnNumber; i++) 
            for (let j = 0; j < rowNumber; j++)
                this.cells[i][j].findNeighbors(this.cells);*/
    }

    recreateCellMatrix() {        
        this.cells = [];
        this.populateCellArray();
    }

    addNewCell(column, row) {
        this.cells[column].push(Math.random());
    }
}
