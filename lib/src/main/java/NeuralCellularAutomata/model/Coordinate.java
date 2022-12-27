package NeuralCellularAutomata.model;

import static NeuralCellularAutomata.global.Configuration.COLUMN_NUMBER;
import static NeuralCellularAutomata.global.Configuration.ROW_NUMBER;

public class Coordinate  {

    private int column, row;

    public Coordinate(int column, int row) {
        this.column = column;
        this.row = row;
    }

    public Coordinate getNeighborCoordinate(Direction direction) {
        int newColumn = this.column + direction.getColumn();
        int newRow = this.row + direction.getRow();

        newColumn = newColumn <= 0 ? COLUMN_NUMBER-1 : newColumn;
        newColumn = newColumn >= COLUMN_NUMBER ? 0 : newColumn;

        newRow = newRow <= 0 ? ROW_NUMBER-1 : newRow;
        newRow = newRow >= ROW_NUMBER ? 0 : newRow;

        return new Coordinate(newColumn, newRow);
    }

    public int getColumn() {
        return this.column;
    }

    public int getRow() {
        return this.row;
    }
}
