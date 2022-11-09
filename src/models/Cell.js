class Cell {

    constructor(column, row) {
        this.column = column, this.row = row;
        this.calculateCellPositionOnCanvas();
        this.state = Math.random();
        this.neighbors = [];
    }

    calculateCellPositionOnCanvas() {
        this.x = canvasWidth/columnNumber*this.column;
        this.y = canvasHeight/rowNumber*this.row;
    }

    update(cellMatrix) {
        this.calculateCellPositionOnCanvas();
        this.findNeighbors(cellMatrix);
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
        let total = 0;
        for (let neighbor in this.neighbors) {
                total += this.neighbors[neighbor].state;
        }
        
        this.state = total/6;
    }

    getColorForCellState() {
        let alpha = (this.state*255).toString(16).split('.')[0];
        if (alpha.length <= 1) 
        alpha = '0' + alpha;
        return '#000000' + alpha;
    }

}