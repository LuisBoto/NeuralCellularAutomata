let columnNumber = 600, rowNumber = 600;
let loopID;

let kernel = [
    [0.8,    -0.85,      0.8],
    [-0.85,    -0.2,     -0.85],
    [0.8,     -0.85,     0.8]
]

function updateConfiguration() {
    columnNumber = parseInt(document.getElementById("inputColumnNumber").value);
    rowNumber = parseInt(document.getElementById("inputRowNumber").value);

    updateCellPopulation();
}

function updateCellPopulation() {
    layer.recreateCellMatrix();
}

function updateInputFieldsValues() {
    document.getElementById("inputColumnNumber").value = columnNumber;
    document.getElementById("inputRowNumber").value = rowNumber;
}

updateInputFieldsValues();