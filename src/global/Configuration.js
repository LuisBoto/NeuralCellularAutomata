let particleNumber = 1000, particleSpeed = 6, particleTurningAngle = 180, neighborTurningAngle = 17, neighborhoodRadius = 75;
let loopID;

function updateConfiguration() {
    particleNumber = parseInt(document.getElementById("inputParticleNumber").value);
    particleSpeed = parseFloat(document.getElementById("inputSpeed").value);
    particleTurningAngle = parseFloat(document.getElementById("inputTurningAngle").value);
    neighborTurningAngle = parseFloat(document.getElementById("inputNeighborAngle").value);
    neighborhoodRadius = parseFloat(document.getElementById("inputNeighborhoodRadius").value);
    updateParticlePopulation();
}

function updateParticlePopulation() {
    clearInterval(loopID);
    layer.updateParticleParameters();
    startCanvasLoop();
}

function updateInputFieldsValues() {
    document.getElementById("inputParticleNumber").value = particleNumber;
    document.getElementById("inputSpeed").value = particleSpeed;
    document.getElementById("inputTurningAngle").value = particleTurningAngle;
    document.getElementById("inputNeighborAngle").value = neighborTurningAngle;
    document.getElementById("inputNeighborhoodRadius").value = neighborhoodRadius;
}

function startCanvasLoop() {
    loopID = setInterval(loop, 1000 / 30);
}

updateInputFieldsValues();