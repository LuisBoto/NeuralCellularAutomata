let presets = [];
presets.push({ 
    name: "Slime mold", 
    activationFunctionBody: "return -1/(0.89*Math.pow(x, 2)+1)+1;",
    kernel: [[0.8,    -0.85,      0.8],
             [-0.85,    -0.2,     -0.85],
             [0.8,     -0.85,     0.8]],
    color: "209F00"
});
presets.push({ 
    name: "Flames", 
    activationFunctionBody: "return -1/Math.pow(2, (Math.pow(x, 2)))+1",
    kernel: [[1,       -0.45,      1],
             [-0.8,    -0.55,     -0.65],
             [0.5,     -0.85,      0.2]],
    color: "EA0000"
});
presets.push({ 
    name: "Conway's GOL", 
    activationFunctionBody: "return (x==3 || x==11 || x==12) ? 1 : 0;",
    kernel: [[1,          1,          1],
             [1,          9,          1],
             [1,          1,          1]],
    color: "FFFFFF"
});
presets.push({ 
    name: "Lava lamp", 
    activationFunctionBody: "return -1/(0.89*Math.pow(x, 2)+1)+1;",
    kernel: [[-0.31,  0.75,  -0.31],
             [0.75,   0.53,  0.75],
             [-0.31, 0.15, -0.31]],
    color: "FFaa00"
});

function createPresetButtons() {
    let htmlButton;
    for (let i=presets.length-1; i>=0; i--) {
        htmlButton = '<input type="button" value="'+ presets[i].name +'" onClick="loadPreset('+ i +')">';
        document.getElementById("presetsTitle").insertAdjacentHTML('afterend', htmlButton);
    }
}

function loadPreset(index) {
    let preset = presets[index];
    activationFunctionBody = preset.activationFunctionBody;
    kernel = preset.kernel;
    cellColor = hexToRgb(preset.color);
    updateInputFieldsValues();
    updateConfiguration();
}

createPresetButtons();