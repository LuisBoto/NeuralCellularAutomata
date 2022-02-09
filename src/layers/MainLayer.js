class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.background = new Model(images.background, 1920*0.5, 1080*0.5);
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
        this.particles = [];
        let populationSize = 500;
        for (let i = 0; i<populationSize; i++) {
            this.particles.push(
                new Particle(
                    4,
                    Math.random()*canvasWidth,
                    Math.random()*canvasHeight,
                    5,
                    180,
                    17,
                    25))
        }
    }

}
