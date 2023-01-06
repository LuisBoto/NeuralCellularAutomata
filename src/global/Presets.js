let presets = [];
presets.push({ 
    name: "Slime mold", 
    columnNumber: 1920, rowNumber: 1080, 
    activationFunctionBody: "return -1/(0.89*Math.pow(x, 2)+1)+1;",
    kernel: [[0.8,    -0.85,      0.8],
             [-0.85,    -0.2,     -0.85],
             [0.8,     -0.85,     0.8]]
});

function createPresetButtons() {
    let htmlButton;
    for (let i=0; i<presets.length; i++) {
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
    updateInputFieldsValues();
    updateConfiguration();
}

createPresetButtons();
loadPreset(0);