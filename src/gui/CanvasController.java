package gui;

import java.awt.Canvas;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;

public class CanvasController {

	private static Canvas canvas;
	private static int height;
	private static int width;

	public CanvasController() {
	}

	protected static void createCanvas(int width, int height) {
		canvas = new Canvas();
		setHeight(height);
		setWidth(width);
		canvas.setSize(new Dimension(width, height));
	}

	public static Canvas getCanvas() {
		if (canvas == null)
			createCanvas(width, height);
		return canvas;
	}

	private static void setHeight(int newHeight) {
		if (newHeight > 0)
			height = newHeight;
		else
			height = 0;
	}

	private static void setWidth(int newWidth) {
		if (newWidth > 0)
			width = newWidth;
		else
			width = 0;
	}

	public static Graphics getGraphics() {
		return getCanvas().getGraphics();
	}

	public static void cleanFrame() {
		getCanvas().setBackground(new Color(255, 255, 255));
		//getGraphics().clearRect(0, 0, width, height);
	}

	public static void setColor(int r, int g, int b) {
		getGraphics().setColor(new Color(r, g, b));
	}

}
