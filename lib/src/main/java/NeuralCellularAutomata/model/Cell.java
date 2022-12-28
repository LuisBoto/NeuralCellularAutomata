package NeuralCellularAutomata.model;

import java.util.ArrayList;
import java.util.Random;
import static NeuralCellularAutomata.global.Configuration.*;

public class Cell {
    private int x, y;
    private int column, row;
    private double state;

    private ArrayList<Neighbor> neighbors;

    public Cell(int column, int row) {
        this.column = column;
        this.row = row;
        this.state = new Random().nextDouble();
        this.calculateCellPositionOnCanvas();
    }

    public void update() {
        double totalState = 0;
        for (Neighbor neighbor : this.neighbors) {
            //if (neighborCell.state > 0.1)
            totalState += neighbor.cell.state * neighbor.kernelValue;
        }
        this.state = totalState + this.state*KERNEL[1][1];
        this.state = this.state > 1 ? 1 : this.state < 0 ? 0 : this.state;
    }

    public void draw() {

    }

    private void calculateCellPositionOnCanvas() {
        this.x = CANVAS_WIDTH/COLUMN_NUMBER*this.column;
        this.y = CANVAS_HEIGHT/ROW_NUMBER*this.row;
    }

    public void findNeighbors(Cell[][] cellMatrix) {
        this.neighbors = new ArrayList<Neighbor>();
        Coordinate currentCoordinate = new Coordinate(this.column, this.row);
        Coordinate neighborCoordinate;
        Cell neighborCell;
        for (Direction dir : Direction.values()) {
            neighborCoordinate = currentCoordinate.getNeighborCoordinate(dir);
            neighborCell = cellMatrix[neighborCoordinate.getColumn()][neighborCoordinate.getRow()];
            this.neighbors.add(new Neighbor(
                    KERNEL[1+ dir.getRow()][1+dir.getColumn()],
                    neighborCell
            ));
        }
    }

    private String getColorForCellState() {
        String alpha = Double.toHexString(this.state*255).split("\\.")[0];
        if (alpha.length() <= 1)
            alpha = "0" + alpha;
        return "#00000" + alpha;
    }

    private class Neighbor {
        public double kernelValue;
        public Cell cell;
        public Neighbor(double kernelValue, Cell cell) {
            this.kernelValue = kernelValue;
            this.cell = cell;
        }
    }
}
