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
        for (var i=0; i<this.particles.length; i++)
            this.particles[i].update(this.particles);
    }

    draw() {
        this.background.draw();
        for (var i=0; i<this.particles.length; i++)
            this.particles[i].draw();
    }

    populateParticleArray() {
        this.particles = [];
        for (var i = 0; i<populationSize; i++) {
            this.particles.push(
                new Particle(
                    5,
                    Math.random()*canvasWidth,
                    Math.random()*canvasHeight,
                    6.7,
                    180,
                    17,
                    5))
        }
    }

}
