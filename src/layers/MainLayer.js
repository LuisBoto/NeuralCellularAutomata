class MainLayer {

    constructor() {
        this.initiate();
    }

    initiate() {
        this.recreateCellMatrix();
        this.gpu = new GPU();
        this.updateCellMatrix = this.gpu.createKernel(function(cellMatrix, kernelValues) {
            let step = [];
            /*let updatedValue = 0;
            //let iMinusOne, jMinusOne, iPlusOne, jPlusOne;
            for (let i = 0; i < cellMatrix.lenght; i++) {
                step[i] = [];
                //iMinusOne = i==0 ? cellMatrix.lenght-1 : i-1;
                //iPlusOne = i==cellMatrix.length-1 ? 0 : i+1;
                for (let j = 0; j<cellMatrix[i].lenght; j++) {
                    //jMinusOne = j==0 ? cellMatrix[i].lenght-1 : j-1;
                    //jPlusOne = j==cellMatrix[i].length-1 ? 0 : j+1;

                    updatedValue = 0.5;
                        /*cellMatrix[i][j]*kernelValues[1][1]
                        + cellMatrix[iMinusOne][j] + kernelValues[0][1]
                        + cellMatrix[i][jMinusOne] + kernelValues[1][0]
                        + cellMatrix[iMinusOne][jMinusOne] + kernelValues[0][0]
                        + cellMatrix[iPlusOne][j] + kernelValues[2][1]
                        + cellMatrix[i][jPlusOne] + kernelValues[1][2]
                        + cellMatrix[iPlusOne][jPlusOne] + kernelValues[2][2]
                        + cellMatrix[iMinusOne][jPlusOne] + kernelValues[0][2]
                        + cellMatrix[iPlusOne][jMinusOne] + kernelValues[2][0];
                    step[this.thread.y][this.thread.x].push(updatedValue > 1 ? 1 : updatedValue < 0 ? 0 : updatedValue);
                }
            }
            return step;*/
            return 0;
        }).setOutput([320, 180]);
        //.setGraphical(true);
    }

    update() {
        let updateTime = Date.now();
        this.cells = this.updateCellMatrix(this.cells, kernel);
        console.log("Update: "+(Date.now()-updateTime));
    }

    draw() {
        context.fillStyle = "#fff";
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        let drawTime = Date.now();
        for (let i=0; i<columnNumber; i++) {
            for (let j=0; j<rowNumber; j++) {
                context.fillStyle = Cell.getColorForCellState(this.cells[i][j]);
                context.fillRect(i, j, 1,1);
            }
        }
        console.log("Draw: "+(Date.now()-drawTime));
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
