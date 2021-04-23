package layers;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.Timer;

public class LayerControl {

	private Layer layer;
	private Timer loopTimer;

	public LayerControl() {

	}

	public void startGame() {
		MainLayer mainLayer = new MainLayer();
		layer = mainLayer;
		loopTimer = new Timer(1000 / 30, new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				loop();
			}
		});
		loopTimer.start();
	}

	private void loop() {
		layer.update();
		layer.draw();
	}

	public void stop() {
		if (loopTimer != null) 
			loopTimer.stop();
	}

}
