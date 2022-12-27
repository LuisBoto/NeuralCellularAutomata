package NeuralCellularAutomata.model;

public enum Direction {
    NORTH(1, 0),
    SOUTH(-1, 0),
    EAST(0, 1),
    WEST(0, -1),
    NORTHEAST(1, 1),
    NORTHWEST(1, -1),
    SOUTHEAST(-1, 1),
    SOUTHWEST(-1, -1);
    
    private int column, row;

    Direction(int column, int row) {
        this.column = column;
        this.row = row;
    }

    public int getColumn() {
        return this.column;
    }

    public int getRow() {
        return this.row;
    }
}