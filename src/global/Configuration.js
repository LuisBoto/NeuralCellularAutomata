let columnNumber = 1920, rowNumber = 1080;
let activationFunctionBody = "return x > 1 ? 1 : x < 0 ? 0 : x;";
let loopID;
let cellColor = hexToRgb("00f200");
console.log(cellColor);

let kernel = [
    [0.8,    -0.85,      0.8],
    [-0.85,    -0.2,     -0.85],
    [0.8,     -0.85,     0.8]
]

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return {r,g,b};
}

function updateActivation() {
    eval( "function activation(x) { " + activationFunctionBody + " }" )
    window["activation"] = activation;
};

function updateConfiguration() {
    columnNumber = parseInt(document.getElementById("inputColumnNumber").value);
    rowNumber = parseInt(document.getElementById("inputRowNumber").value);
    activationFunctionBody = document.getElementById("activationFunctionBody").value;

    updateActivation();
    layer.initiate();
}

function updateInputFieldsValues() {
    document.getElementById("inputColumnNumber").value = columnNumber;
    document.getElementById("inputRowNumber").value = rowNumber;
    document.getElementById("activationFunctionBody").value = activationFunctionBody;
}

updateInputFieldsValues();
updateActivation();
