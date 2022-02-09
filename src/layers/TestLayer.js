class TestLayer extends Layer {

    constructor() {
        super();
        this.initiate();
    }

    initiate() {
        this.background = new Model(images.background, 1920*0.5, 1080*0.5);
        this.populateParticleArray();
    }

    update() {
        this.particles[0].update(this.particles);
    }

    draw() {
        this.background.draw();
        for (let i=0; i<this.particles.length; i++)
            this.particles[i].draw();
    }

    populateParticleArray() {
        this.particles = [];
        this.particles.push(
                new TestParticle(
                    4,
                    0.5*canvasWidth,
                    0.5*canvasHeight,
                    5,
                    180,
                    17,
                    250));
        this.particles.push(
            new Particle(
                4,
                0.4*canvasWidth,
                0.5*canvasHeight,
                5,
                180,
                17,
                25));
        this.particles.push(
            new Particle(
                4,
                0.45*canvasWidth,
                0.5*canvasHeight,
                5,
                180,
                17,
                25));
                this.particles.push(
            new Particle(
                4,
                0.6*canvasWidth,
                0.5*canvasHeight,
                5,
                180,
                17,
                25));
    }

}
