let presets = [];
presets.push({ 
    name: "Slime mold", 
    columnNumber: 1920, rowNumber: 1080, 
    activationFunctionBody: "return -1/(0.89*Math.pow(x, 2)+1)+1;",
    kernel: [[0.8,    -0.85,      0.8],
             [-0.85,    -0.2,     -0.85],
             [0.8,     -0.85,     0.8]],
    color: "209f00"
});
presets.push({ 
    name: "Flames", 
    columnNumber: 1920, rowNumber: 1080, 
    activationFunctionBody: "return -1/Math.pow(2, (Math.pow(x, 2)))+1",
    kernel: [[0.994,    -0.433,      0.959],
             [-0.815,    -0.602,     -0.646],
             [0.514,     -0.908,     0.175]],
    color: "990000"
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
    columnNumber = preset.columnNumber;
    rowNumber = preset.rowNumber;
    activationFunctionBody = preset.activationFunctionBody;
    kernel = preset.kernel;
    cellColor = hexToRgb(preset.color);
    updateInputFieldsValues();
    updateConfiguration();
}

createPresetButtons();