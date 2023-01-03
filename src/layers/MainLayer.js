class MainLayer {

    constructor() {
        this.initiate();
    }

    initiate() {
        this.recreateCellMatrix();
    }

    update() {
        let updateTime = Date.now();
        this.cells.map(column => column.map(cell => cell.update()));
        console.log("Update: "+(Date.now()-updateTime));
    }

    updateCellStatesFromWorkerResponse(e) {
        for (let i=0; i<e.data.length; i++)
                for (let j=0; j<e.data[i].length; j++) {
                    let cell = e.data[i][j];
                    this.cells[cell.column][cell.row].state = cell.state;
            }
    }

    draw() {
        context.fillStyle = "#fff";
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        let drawTime = Date.now();
        this.cells.map(column => column.filter(cell => cell.state == 1).map(cell => cell.draw()));
        console.log("Draw: "+(Date.now()-drawTime));
    }

    populateCellArray() {
        for (let i = 0; i < columnNumber; i++) {
            this.cells[i] = []
            for (let j = 0; j < rowNumber; j++)
                this.addNewCell(i, j);
        }
        for (let i = 0; i < columnNumber; i++) 
            for (let j = 0; j < rowNumber; j++)
                this.cells[i][j].findNeighbors(this.cells);
    }

    recreateCellMatrix() {        
        this.cells = [];
        this.populateCellArray();
    }

    addNewCell(column, row) {
        this.cells[column].push(new Cell(column, row));
    }
}
