class Cell {

    constructor(column, row) {
        this.column = column, this.row = row;
        this.calculateCellPositionOnCanvas();
        this.state = Math.random();
        //this.neighbors = [];
    }

    calculateCellPositionOnCanvas() {
        this.x = canvasWidth/columnNumber*this.column;
        this.y = canvasHeight/rowNumber*this.row;
    }

    update(cellMatrix) {
        this.calculateCellPositionOnCanvas();
        this.findNeighbors(cellMatrix);
        this.cutState();
    }

    draw() {
        context.fillStyle = this.getColorForCellState(this.state);
        context.fillRect(this.x, this.y, canvasWidth/columnNumber, canvasHeight/rowNumber);
    }

    findNeighbors(cellMatrix) {
        //this.neighbors = [];
        let currentCoordinate = new Coordinate(this.column, this.row);
        let neighborCoordinate, neighborCell;
        let totalState = 0;
        for (let direction in DirectionEnum) {
            neighborCoordinate = currentCoordinate.getNeighborCoordinate(DirectionEnum[direction]);
            neighborCell = cellMatrix[neighborCoordinate.column][neighborCoordinate.row]; 
            totalState += neighborCell.state * kernel[1+DirectionEnum[direction].row][1+DirectionEnum[direction].column];
            //this.neighbors.push(cellMatrix[neighborCoordinate.column][neighborCoordinate.row]);
        }
        this.state = totalState + this.state*kernel[1][1];
    }

    cutState() {
        if (this.state > 1)
            this.state = 1;
        if (this.state < 0)
            this.state = 0;
    }

    getColorForCellState() {
        let alpha = (this.state*255).toString(16).split('.')[0];
        if (alpha.length <= 1) 
        alpha = '0' + alpha;
        return '#000000' + alpha;
    }

}