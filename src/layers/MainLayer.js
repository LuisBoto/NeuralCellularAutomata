class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
        this.monthChange = false;
    }

    initiate() {
        this.background = new Model(images.background, 1920*0.5, 1080*0.5);

    }

    update() {

    }

    draw() {
        this.background.draw();
    }

}
