class Cell {

    constructor(column, row) {
        this.column = column, this.row = row;
        this.calculateCellPositionOnCanvas();
        this.state = Math.random();
    }

    update() {
        this.calculateCellPositionOnCanvas();
        let totalState = 0;
        for (let neighbor of this.neighbors) {
            //if (neighborCell.state > 0.1)
            totalState += neighbor.cell.state * kernel[1+neighbor.direction.row][1+neighbor.direction.column];
        }
        this.state = totalState + this.state*kernel[1][1];      
        this.cutState();
    }

    draw() {
        if (this.state <= 0.1)
            return;
        context.fillStyle = this.getColorForCellState(this.state);
        context.fillRect(Math.floor(this.x), Math.floor(this.y), Math.floor(canvasWidth/columnNumber), Math.floor(canvasHeight/rowNumber));
    }

    calculateCellPositionOnCanvas() {
        this.x = canvasWidth/columnNumber*this.column;
        this.y = canvasHeight/rowNumber*this.row;
    }

    findNeighbors(cellMatrix) {
        this.neighbors = [];
        let currentCoordinate = new Coordinate(this.column, this.row);
        let neighborCoordinate, neighborCell;
        for (let direction in DirectionEnum) {
            neighborCoordinate = currentCoordinate.getNeighborCoordinate(DirectionEnum[direction]);
            neighborCell = cellMatrix[neighborCoordinate.column][neighborCoordinate.row]; 
            this.neighbors.push({
                direction : DirectionEnum[direction],
                cell : neighborCell
            })
        }
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