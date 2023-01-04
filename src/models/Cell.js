class Cell {

    constructor(column, row) {
        this.column = column, this.row = row;
        this.calculateCellPositionOnCanvas();
        this.state = Math.random();
    }

    update() {
        let totalState = 0;
        for (let neighbor of this.neighbors) {
            //if (neighbor.cell.state >= 0.1)
            totalState += neighbor.cell.state * neighbor.kernelValue;
        }
        this.state = totalState + this.state*kernel[1][1];      
        this.cutState();
    }

    draw() {
        context.fillStyle = this.getColorForCellState(this.state);
        context.fillRect(this.column, this.row, 1,1);
        //context.fillRect(this.x, this.y, this.width, this.height);
    }

    calculateCellPositionOnCanvas() {
        this.x = canvasWidth/columnNumber*this.column;
        this.y = canvasHeight/rowNumber*this.row;
        this.width = Math.floor(canvasWidth/columnNumber);
        this.height = Math.floor(canvasHeight/rowNumber);
    }

    findNeighbors(cellMatrix) {
        this.neighbors = [];
        let currentCoordinate = new Coordinate(this.column, this.row);
        let neighborCoordinate, neighborCell;
        for (let direction in DirectionEnum) {
            neighborCoordinate = currentCoordinate.getNeighborCoordinate(DirectionEnum[direction]);
            neighborCell = cellMatrix[neighborCoordinate.column][neighborCoordinate.row]; 
            this.neighbors.push({
                kernelValue : kernel[1+DirectionEnum[direction].row][1+DirectionEnum[direction].column],
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

    static getColorForCellState(state) {
        let alpha = (state*255).toString(16).split('.')[0];
        if (alpha.length <= 1) 
        alpha = '0' + alpha;
        return '#000000' + alpha;
    }

}