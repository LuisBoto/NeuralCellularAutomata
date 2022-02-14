class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.background = new Model(images.background, 1920*0.5, 1080*0.5);
        this.particles = [];
        this.populateParticleArray();
    }

    update() {
        for (let i=0; i<this.particles.length; i++)
            this.particles[i].update(this.particles);
    }

    draw() {
        this.background.draw();
        for (let i=0; i<this.particles.length; i++)
            this.particles[i].draw();
    }

    populateParticleArray() {
        for (let i = 0; i < particleNumber; i++)
            this.addNewParticle();
    }

    updateParticleParameters() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].speed = particleSpeed;
            this.particles[i].turningAngle = particleTurningAngle;
            this.particles[i].neighborhoodAngle = neighborTurningAngle;
            this.particles[i].neighborRadius = neighborhoodRadius;
        }
        while (this.particles.length < particleNumber)
            this.addNewParticle();
        while (this.particles.length > particleNumber)
            this.particles.pop();
    }

    addNewParticle() {
        let particleRadius = 4;
        this.particles.push(
            new Particle(
                particleRadius,
                Math.random()*canvasWidth,
                Math.random()*canvasHeight,
                particleSpeed,
                particleTurningAngle,
                neighborTurningAngle,
                neighborhoodRadius));
    }
}
