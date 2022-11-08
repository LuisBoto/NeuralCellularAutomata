class MainLayer {

    constructor() {
        this.initiate();
    }

    initiate() {
        this.background = new Background('#ffffff', 1920*0.5, 1080*0.5);
        this.recreateParticleMatrix();
    }

    update() {
        for (let i=0; i<this.particles.length; i++)
            for (let j=0; j<this.particles[i].length; j++)
                this.particles[i][j].update(this.particles);
    }

    draw() {
        this.background.draw();
        for (let i=0; i<this.particles.length; i++)
            for (let j=0; j<this.particles[i].length; j++)
                this.particles[i][j].draw();
    }

    populateParticleArray() {
        for (let i = 0; i < columnNumber; i++) {
            this.particles[i] = []
            for (let j = 0; j < rowNumber; j++)
                this.addNewParticle(i, j);
        }
    }

    recreateParticleMatrix() {        
        this.particles = [];
        this.populateParticleArray();
    }

    addNewParticle(column, row) {
        this.particles[column].push(new Particle(column, row));
    }
}
