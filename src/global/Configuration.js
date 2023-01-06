let columnNumber = 1920, rowNumber = 1080;
let activationFunctionBody = "return x";
let loopID;

let kernel = [
    [0.8,    -0.85,      0.8],
    [-0.85,    -0.2,     -0.85],
    [0.8,     -0.85,     0.8]
]

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