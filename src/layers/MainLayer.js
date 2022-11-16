class MainLayer {

    constructor() {
        this.initiate();
    }

    initiate() {
        this.background = new Background('#ffffff', 1920*0.5, 1080*0.5);
        this.recreateCellMatrix();
    }

    update() {
        let initialTime = Date.now();
        let workerNumber =  navigator.hardwareConcurrency;
        const worker = new Worker('src/layers/UpdateWorker.js');
        worker.postMessage(this.cells);
        worker.onmessage = e => {
            for (let i=0; i<this.cells.length; i++)
                for (let j=0; j<this.cells[i].length; j++) {
                    let cell = e.data[i][j];
                    this.cells[cell.column][cell.row].state = cell.state;
                }
        
        this.draw();
        console.log("next");
        requestAnimationFrame(() => loop());
        };
        //console.log("ELAPSED ON UPDATE: "+ (Date.now()-initialTime));
    }

    draw() {
        let initialTime = Date.now();
        this.background.draw();
        for (let i=0; i<this.cells.length; i++)
            for (let j=0; j<this.cells[i].length; j++)
                this.cells[i][j].draw();
        //console.log("ELAPSED ON DRAW: "+ (Date.now()-initialTime));
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
