let presets = [];
presets.push({ name: "Cow Pattern", population: 1000, speed: 6, angle: 180, nAngle: -15, nRadius: 75});
presets.push({ name: "Moving Clusters", population: 1000, speed: 6, angle: 180, nAngle: -7, nRadius: 75});
presets.push({ name: "Rings", population: 1000, speed: 6, angle: 45, nAngle: 4, nRadius: 80});
presets.push({ name: "Initial configuration", population: 1000, speed: 6, angle: 180, nAngle: 17, nRadius: 75});

function createPresetButtons() {
    let htmlButton;
    for (let i=0; i<presets.length; i++) {
        htmlButton = '<input type="button" value="'+ presets[i].name +'" onClick="loadPreset('+ i +')">';
        document.getElementById("presetsTitle").insertAdjacentHTML('afterend', htmlButton);
    }
}

function loadPreset(index) {
    let preset = presets[index];
    particleNumber = preset.population;
    particleSpeed = preset.speed;
    particleTurningAngle = preset.angle;
    neighborTurningAngle = preset.nAngle;
    neighborhoodRadius = preset.nRadius;
    updateInputFieldsValues();
    updateConfiguration();
}

createPresetButtons();