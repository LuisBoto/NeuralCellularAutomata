let presets = [];
presets.push({ name: "Initial configuration", columnNumber: 1920, rowNumber: 1080});

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
    updateInputFieldsValues();
    updateConfiguration();
}

createPresetButtons();