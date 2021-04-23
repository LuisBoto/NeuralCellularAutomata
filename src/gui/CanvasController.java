package gui;

import java.awt.Canvas;
import java.awt.Dimension;

public class CanvasController {

	private Canvas canvas;
	private int height;
	private int width;

	public CanvasController(int width, int height) {
		this.setHeight(height);
		this.setWidth(width);
	}

	protected void createCanvas() {
		this.canvas = new Canvas();
		canvas.setSize(new Dimension(500, 500));
	}

	protected Canvas getCanvas() {
		if (canvas == null)
			this.createCanvas();
		return this.canvas;
	}

	private void setHeight(int newHeight) {
		if (newHeight > 0)
			this.height = newHeight;
		else
			this.height = 0;
	}

	private void setWidth(int newWidth) {
		if (newWidth > 0)
			this.width = newWidth;
		else
			this.width = 0;
	}

}
