let columnNumber = 1920, rowNumber = 1080;
let activationFunctionBody = "return -1/(0.89*Math.pow(x, 2)+1)+1;";
let loopID;

let kernel = [
    [0.8,    -0.85,      0.8],
    [-0.85,    -0.2,     -0.85],
    [0.8,     -0.85,     0.8]
]

function updateConfiguration() {
    columnNumber = parseInt(document.getElementById("inputColumnNumber").value);
    rowNumber = parseInt(document.getElementById("inputRowNumber").value);

    layer.initiate();
}

function updateInputFieldsValues() {
    document.getElementById("inputColumnNumber").value = columnNumber;
    document.getElementById("inputRowNumber").value = rowNumber;
}

updateInputFieldsValues();

eval( "function activation(x) { " + activationFunctionBody + " }" );