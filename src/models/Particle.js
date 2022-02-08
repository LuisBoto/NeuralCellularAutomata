class Particle {

    constructor(particleRadius, x, y, speed, turningAngle, neighborRadius) {
        this.particleRadius = particleRadius;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.turningAngle = turningAngle;
        this.neighborRadius = neighborRadius;
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.particleRadius, 0, 2*Math.PI)
        context.lineWidth = 3;
        context.stroke();
    }
}