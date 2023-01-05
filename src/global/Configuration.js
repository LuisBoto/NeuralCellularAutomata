let columnNumber = 1080, rowNumber = 1920;
let loopID;

let kernel = [
    [0.8,    -0.85,      0.8],
    [-0.85,    -0.2,     -0.85],
    [0.8,     -0.85,     0.8]
]

function updateConfiguration() {
    columnNumber = parseInt(document.getElementById("inputColumnNumber").value);
    rowNumber = parseInt(document.getElementById("inputRowNumber").value);

    layer.populateCellGrid();
}

function updateInputFieldsValues() {
    document.getElementById("inputColumnNumber").value = columnNumber;
    document.getElementById("inputRowNumber").value = rowNumber;
}

updateInputFieldsValues();