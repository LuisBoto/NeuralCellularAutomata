class Background {

    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
    }

    draw(){
        context.fillStyle = this.color;
        context.fillRect(0, 0, canvasWidth, canvasHeight);
    }
}
