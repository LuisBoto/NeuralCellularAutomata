package gui;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.border.EtchedBorder;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.Dimension;

public class MainFrame extends JFrame {

	private static final long serialVersionUID = -9033194519909990192L;
	private MainFrameController controller;
	private JPanel mainPane;
	private JPanel buttonPn;
	private JPanel canvasPn;
	private JButton btnStart;

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
		setBounds(100, 100, 700, 500);
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
			buttonPn.setLayout(new BoxLayout(buttonPn, BoxLayout.Y_AXIS));
			buttonPn.add(getBtnStart());
		}
		return buttonPn;
	}

	protected JPanel getCanvasPn() {
		if (canvasPn == null) {
			canvasPn = new JPanel();
			canvasPn.setPreferredSize(new Dimension(500, 500));
			canvasPn.setBorder(new EtchedBorder(EtchedBorder.LOWERED, null, null));
			canvasPn.setLayout(new BorderLayout(0, 0));
			CanvasController.createCanvas(500, 500);
			canvasPn.add(CanvasController.getCanvas(), BorderLayout.CENTER);
		}
		return canvasPn;
	}
	
	protected JButton getBtnStart() {
		if (btnStart == null) {
			btnStart = new JButton("Start");
			btnStart.addActionListener(new ActionListener() {
				public void actionPerformed(ActionEvent e) {
					controller.start();
				}
			});
		}
		return btnStart;
	}
}
