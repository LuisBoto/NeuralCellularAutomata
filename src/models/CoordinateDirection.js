class Coordinate  {

    constructor(column, row) {
        this.column = column;
        this.row = row;
    }

    getNeighborCoordinate(direction) {
        let newColumn = this.column + direction.column;
        let newRow = this.row + direction.row;

        newColumn = newColumn <= 0 ? columnNumber-1 : newColumn;
        newColumn = newColumn >= columnNumber ? 0 : newColumn;

        newRow = newRow <= 0 ? rowNumber-1 : newRow;
        newRow = newRow >= rowNumber ? 0 : newRow;

        return new Coordinate(newColumn, newRow);
    }
}


class Direction {

    constructor(column, row) {
        this.column = column;
        this.row = row;
    }

}

const DirectionEnum = {
    NORTH : new Direction(1, 0),
    SOUTH : new Direction(-1, 0),
    EAST : new Direction(0, 1),
    WEST : new Direction(0, -1),
    NORTHEAST: new Direction(1, 1),
    NORTHWEST: new Direction(1, -1),
    SOUTHEAST: new Direction(-1, 1),
    SOUTHWEST: new Direction(-1, -1),
};