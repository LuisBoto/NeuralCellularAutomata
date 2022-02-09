class TestParticle {

    constructor(particleRadius, x, y, speed, turningAngle, neighborhoodAngle, neighborRadius) {
        this.particleRadius = particleRadius;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.turningAngle = turningAngle;
        this.neighborhoodAngle = neighborhoodAngle;
        this.neighborRadius = neighborRadius;

        this.orientation = 0;
        this.neighbors = [];
    }

    update(particleArray) {
        this.findNeighbors(particleArray);
        this.categorizeNeighborsBySide();
        this.updateOrientation();

        this.checkBoundaries();
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.particleRadius, 0, 2*Math.PI)
        context.lineWidth = 2;
        context.stroke();
        context.fillStyle = getColorForNeighborhoodSize(this.neighbors.length);
        context.fill();
        context.closePath();
        context.beginPath();
        context.arc(this.x, this.y, this.particleRadius, degreesToRadians(this.orientation-90), degreesToRadians(this.orientation+90));
        context.fillStyle = "white";
        context.fill();
        context.closePath();

        context.beginPath();
        let angleMovement = degreesToRadians(this.orientation);
        let x2 = this.x + this.speed*Math.cos(angleMovement);
        let y2 = this.y + this.speed*Math.sin(angleMovement);
        //let m = (y2-this.y)/(x2-this.x);
        let dividingLine = (x) => ((x-this.x)/(x2-this.x))*(y2-this.y) + this.y
        for (let x=0; x<canvasWidth; x++){
            context.moveTo(x, dividingLine(x));
            context.lineTo(x+1, dividingLine(x+1));
            context.stroke();
        }
        context.closePath();
        context.font = "19px Georgia";
        context.fillStyle = "black";
        context.lineWidth = 8;
        context.textAlign = "center";
        context.fillText("LEFT: "+this.leftNeighbors, canvasWidth*0.1,canvasHeight*0.5);
        context.fillText("RIGHT: "+this.rightNeighbors, canvasWidth*0.9,canvasHeight*0.5);

        context.fillText("ANGLE: "+this.orientation+"º", canvasWidth*0.9,canvasHeight*0.6);
    }

    updateOrientation() {
        this.orientation += 10;
    }

    findNeighbors(particleArray) {
        this.neighbors = [];
        let distance;
        for (let i = 0; i < particleArray.length; i++) {
            if (particleArray[i] === this)
                continue;
            distance = Math.sqrt(
                Math.pow(particleArray[i].x - this.x,2)
                + Math.pow(particleArray[i].y - this.y,2));
            if (distance <= this.neighborRadius)
                this.neighbors.push(particleArray[i]);
        }
    }

    categorizeNeighborsBySide() {
        this.leftNeighbors = 0; this.rightNeighbors = 0;
        let angleMovement = degreesToRadians(this.orientation);
        let x2 = this.x + this.speed*Math.cos(angleMovement);
        let y2 = this.y + this.speed*Math.sin(angleMovement);

        let dividingLine = (x) => ((x-this.x)/(x2-this.x))*(y2-this.y) + this.y
        let condition = (neighborY, neighborX) => {
            if (this.orientation < 90 || this.orientation > 270) return neighborY < dividingLine(neighborX);
            else return neighborY > dividingLine(neighborX);
        }
        for (let i = 0; i < this.neighbors.length; i++) {
            if (condition(this.neighbors[i].y, this.neighbors[i].x))
                this.leftNeighbors++;
            else
                this.rightNeighbors++;
        }
    }

    checkBoundaries() {
        if (this.orientation > 360)
            this.orientation = this.orientation%360;
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