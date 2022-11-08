class Particle {

    constructor(column, row) {
        this.column = column, this.row = row;
        this.calculateParticlePositionOnCanvas();
        this.state = 0;
        this.neighbors = [];
    }

    calculateParticlePositionOnCanvas() {
        this.x = canvasWidth/columnNumber*this.column;
        this.y = canvasHeight/rowNumber*this.row;
    }

    update(particleArray) {
        this.calculateParticlePositionOnCanvas();
        this.findNeighbors(particleArray);
        this.state = Math.random() < 0.5 ? 1 : 0;
    }

    draw() {
        context.fillStyle = getColorForCellState(this.state);
        context.fillRect(this.x, this.y, canvasWidth/columnNumber, canvasHeight/rowNumber);
    }

    findNeighbors(particleArray) {
        this.neighbors = [];
    }

}