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
    public int[][] update() {
        int[][] frame = new int[COLUMN_NUMBER][ROW_NUMBER];
        for (int i=0; i<this.cells.length; i++)
            for (int j=0; j<this.cells[i].length; j++) {
                this.cells[i][j].update();
                frame[i][j] = cells[i][j].getAlphaForCellState();
            }
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
