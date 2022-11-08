class Particle {

    constructor(column, row) {
        this.column = column, this.row = row;
        this.x = canvasWidth/columnNumber*this.column;
        this.y = canvasHeight/rowNumber*this.row;

        this.state = 0;
        this.neighbors = [];
    }

    update(particleArray) {
        this.findNeighbors(particleArray);
        this.state = Math.random() < 0.5 ? 1 : 0;
    }

    draw() {
        context.fillStyle = this.state == 1 ? '#000000' : '#ffffff';
        context.fillRect(this.x, this.y, canvasWidth/columnNumber, canvasHeight/rowNumber);
    }

    findNeighbors(particleArray) {
        this.neighbors = [];
    }

}