class Cell {

    constructor(column, row) {
        this.column = column, this.row = row;
        this.calculateCellPositionOnCanvas();
        this.state = 0;
        this.neighbors = [];
    }

    calculateCellPositionOnCanvas() {
        this.x = canvasWidth/columnNumber*this.column;
        this.y = canvasHeight/rowNumber*this.row;
    }

    update(cellMatrix) {
        this.calculateCellPositionOnCanvas();
        this.findNeighbors(cellMatrix);
        this.state = Math.random() < 0.5 ? 1 : 0;
    }

    draw() {
        context.fillStyle = this.getColorForCellState(this.state);
        context.fillRect(this.x, this.y, canvasWidth/columnNumber, canvasHeight/rowNumber);
    }

    findNeighbors(cellMatrix) {
        this.neighbors = [];
        let currentCoordinate = new Coordinate(this.column, this.row);
        let neighborCoordinate;
        for (let direction in DirectionEnum) {
            neighborCoordinate = currentCoordinate.getNeighborCoordinate(DirectionEnum[direction]);
            this.neighbors.push(cellMatrix[neighborCoordinate.column][neighborCoordinate.row]);
        }
    }

    getColorForCellState() {
        let alpha = (this.state*255).toString(16);
        if (alpha.length <= 1) 
        alpha = '0' + alpha;
        return '#000000' + alpha;
    }

}