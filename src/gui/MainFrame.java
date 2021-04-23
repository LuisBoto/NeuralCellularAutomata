package gui;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;

public class MainFrame extends JFrame {

	private static final long serialVersionUID = -9033194519909990192L;
	private MainFrameController controller;
	private JPanel mainPane;
	private JPanel buttonPn;
	private JPanel canvasPn;

	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					MainFrame frame = new MainFrame();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	public MainFrame() {
		this.controller = new MainFrameController(this);
		setTitle("Primordial Particle System");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 450, 300);
		getContentPane().add(getMainPane(), BorderLayout.CENTER);
	}

	protected JPanel getMainPane() {
		if (mainPane == null) {
			mainPane = new JPanel();
			mainPane.setLayout(new BorderLayout(0, 0));
			mainPane.add(getButtonPn(), BorderLayout.EAST);
			mainPane.add(getCanvasPn(), BorderLayout.CENTER);
		}
		return mainPane;
	}

	protected JPanel getButtonPn() {
		if (buttonPn == null) {
			buttonPn = new JPanel();
		}
		return buttonPn;
	}

	protected JPanel getCanvasPn() {
		if (canvasPn == null) {
			canvasPn = new JPanel();
		}
		return canvasPn;
	}
	
}
