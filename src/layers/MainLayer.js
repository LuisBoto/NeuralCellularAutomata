class MainLayer extends Layer {

    constructor() {
        super();
        this.initiate();
        this.monthChange = false;
    }

    initiate() {
        this.background = new Model(images.background, 1920*0.5, 1080*0.5);
        this.populateParticleArray();
    }

    update() {
        this.updateParticles();
    }

    draw() {
        this.background.draw();
        this.drawParticles();
    }

    updateParticles() {
        for (var i=0; i<this.particles.length; i++)
            this.particles[i].update();
    }

    drawParticles() {
        for (var i=0; i<this.particles.length; i++)
            this.particles[i].draw();
    }

    populateParticleArray() {
        this.particles = [];
        for (var i = 0; i<populationSize; i++) {
            this.particles.push(
                new Particle(
                    2.5,
                    Math.random()*canvasWidth,
                    Math.random()*canvasHeight,
                    6,
                    180,
                    17,
                    5))
        }
    }

}
