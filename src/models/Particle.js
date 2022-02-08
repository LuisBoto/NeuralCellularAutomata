class Particle {

    constructor(particleRadius, x, y, speed, orientation, turningAngle, neighborRadius) {
        this.particleRadius = particleRadius;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.orientation = orientation;
        this.turningAngle = turningAngle;
        this.neighborRadius = neighborRadius;
    }

    update() {
        //1 - Check neighborhood radius for other particles
        //2 - Calculate rotation sign
        //3 - Process new x,y using speed and turningAngle according to orientation
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.particleRadius, 0, 2*Math.PI)
        context.lineWidth = 3;
        context.stroke();
    }
}