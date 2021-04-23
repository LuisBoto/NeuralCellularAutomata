package models;

public abstract class Model {

	private String imagePath;
	private int x;
	private int y;
	private int width;
	private int height;

	public Model(String imagePath, int x, int y) {
		this.imagePath = imagePath;
		this.x = x;
		this.y = y;
		// this.width = this.image.width;
		// this.height = this.image.height;
	}

	public abstract void draw();
}
