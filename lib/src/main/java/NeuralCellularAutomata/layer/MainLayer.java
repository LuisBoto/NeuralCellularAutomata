package NeuralCellularAutomata.layer;

import NeuralCellularAutomata.model.Cell;

import java.awt.image.BufferedImage;

import static NeuralCellularAutomata.global.Configuration.*;

public class MainLayer implements Layer {

    private Cell[][] cells;

    public MainLayer() {
        this.recreateCellMatrix();
    }

    @Override
    public void update() {
        for (int i=0; i<this.cells.length; i++)
            for (int j=0; j<this.cells[i].length; j++)
                this.cells[i][j].update();
        this.draw();
    }

    @Override
    public BufferedImage draw() {
        BufferedImage frame = new BufferedImage(CANVAS_WIDTH, CANVAS_HEIGHT, BufferedImage.TYPE_INT_RGB);
        for (int i=0; i<this.cells.length; i++)
            for (int j=0; j<this.cells[i].length; j++)
                frame = this.cells[i][j].draw(frame);
        return frame;
    }

    private void populateCellArray() {
        for (int i = 0; i < COLUMN_NUMBER; i++) {
            this.cells[i] = new Cell[ROW_NUMBER];
            for (int j = 0; j < ROW_NUMBER; j++)
                this.addNewCell(i, j);
        }
        for (int i = 0; i < COLUMN_NUMBER; i++)
            for (int j = 0; j < ROW_NUMBER; j++)
                this.cells[i][j].findNeighbors(this.cells);
    }

    private void recreateCellMatrix() {
        this.cells = new Cell[COLUMN_NUMBER][ROW_NUMBER];
        this.populateCellArray();
    }

    private void addNewCell(int column, int row) {
        this.cells[column][row] = new Cell(column, row);
    }
}
