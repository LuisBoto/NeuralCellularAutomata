package NeuralCellularAutomata.model;

import java.awt.*;
import java.awt.image.BufferedImage;
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

    public BufferedImage draw(BufferedImage frame) {
        Graphics2D graph = frame.createGraphics();
        graph.setColor(new Color( 255, 255, 255, (int) (this.state*255)));
        graph.fill(new Rectangle(this.x, this.y, CANVAS_WIDTH/COLUMN_NUMBER, CANVAS_HEIGHT/ROW_NUMBER));
        graph.dispose();
        return frame;
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

    private class Neighbor {
        public double kernelValue;
        public Cell cell;
        public Neighbor(double kernelValue, Cell cell) {
            this.kernelValue = kernelValue;
            this.cell = cell;
        }
    }
}
