package NeuralCellularAutomata.layer;

import NeuralCellularAutomata.model.Cell;

import static NeuralCellularAutomata.global.Configuration.COLUMN_NUMBER;
import static NeuralCellularAutomata.global.Configuration.ROW_NUMBER;

public class MainLayer implements Layer {

    private Cell[][] cells;

    public MainLayer() {
        //this.background = new Background('#ffffff', 1920*0.5, 1080*0.5);
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
    public void draw() {
        /*this.background.draw();
        for (let i=0; i<this.cells.length; i++)
            for (let j=0; j<this.cells[i].length; j++)
                this.cells[i][j].draw();*/
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
