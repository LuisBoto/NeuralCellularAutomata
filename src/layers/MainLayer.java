package layers;

import java.util.Random;

import gui.CanvasController;

public class MainLayer extends Layer {

	public MainLayer() {

	}

	@Override
	public void draw() {

	}

	@Override
	public void update() {
		CanvasController.cleanFrame();
		Random r = new Random();
		CanvasController.setColor(255, 255, 255);
		CanvasController.getGraphics().fillOval(r.nextInt(500), r.nextInt(500), 10, 10);
	}

}
