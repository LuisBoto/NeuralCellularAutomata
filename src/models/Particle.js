class Particle {

    constructor(particleRadius, x, y, speed, turningAngle, neighborhoodAngle, neighborRadius) {
        this.particleRadius = particleRadius;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.turningAngle = turningAngle;
        this.neighborhoodAngle = neighborhoodAngle;
        this.neighborRadius = neighborRadius;

        this.orientation = 0;
    }

    update() {
        this.updateOrientation();
        var sign = 1;
        if (Math.random() > 0.5)
            sign = -1;
        let angleMovement = degreesToRadians(this.orientation) * sign;
        this.x += this.speed*Math.cos(angleMovement);
        this.y += this.speed*Math.sin(angleMovement);
        this.checkBoundaries();
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.particleRadius, 0, 2*Math.PI)
        context.lineWidth = 3;
        context.stroke();
    }

    updateOrientation() {
        this.orientation += this.turningAngle + this.neighborhoodAngle*3;
    }

    checkBoundaries() {
        if (this.orientation >= 360)
            this.orientation -= 360;
        if (this.x > canvasWidth)
            this.x -= canvasWidth;
        if (this.x < 0)
            this.x = canvasWidth;
        if (this.y > canvasHeight)
            this.y -= canvasHeight
        if (this.y < 0)
            this.y = canvasHeight;
    }
}