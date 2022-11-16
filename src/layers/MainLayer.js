class MainLayer {

    constructor() {
        this.initiate();
    }

    initiate() {
        this.background = new Background('#ffffff', 1920*0.5, 1080*0.5);
        this.recreateCellMatrix();
    }

    update() {
        let workerNumber = navigator.hardwareConcurrency;
        
        let running = 0;
        for (let n=0; n<workerNumber; n++) {
            const worker = new Worker('src/layers/UpdateWorker.js');
            worker.onmessage = workerDone;
            worker.postMessage(this.cells.slice(columnNumber/workerNumber*n, columnNumber/workerNumber*(n+1)));
            running++;
        }

        function workerDone(e) {
            running--;
            layer.updateCellStatesFromWorkerResponse(e);
            if (running==0) {
                layer.draw();
                requestAnimationFrame(() => loop());
            }
        }
    }

    updateCellStatesFromWorkerResponse(e) {
        for (let i=0; i<e.data.length; i++)
                for (let j=0; j<e.data[i].length; j++) {
                    let cell = e.data[i][j];
                    this.cells[cell.column][cell.row].state = cell.state;
            }
    }

    draw() {
        this.background.draw();
        for (let i=0; i<this.cells.length; i++)
            for (let j=0; j<this.cells[i].length; j++)
                this.cells[i][j].draw();
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
