class MainLayer {

    constructor() {
        this.initiate();
    }

    initiate() {
        this.background = new Background('#ffffff', 1920*0.5, 1080*0.5);
        this.recreateCellMatrix();
    }

    update() {
        for (let i=0; i<this.cells.length; i++)
            for (let j=0; j<this.cells[i].length; j++)
                this.cells[i][j].update(this.cells);
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
    }

    recreateCellMatrix() {        
        this.cells = [];
        this.populateCellArray();
    }

    addNewCell(column, row) {
        this.cells[column].push(new Cell(column, row));
    }
}
