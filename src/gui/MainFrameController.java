package gui;

import layers.LayerControl;

public class MainFrameController {

	private MainFrame mf;
	private LayerControl lc;

	public MainFrameController(MainFrame mf) {
		this.mf = mf;
	}

	protected void start() {
		if (lc!=null) {
			lc.stop();
		}
		lc = new LayerControl();
		lc.startGame();
	}

}
