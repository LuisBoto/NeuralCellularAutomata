let columnNumber = 300, rowNumber = 200;
let loopID;

let kernel = [
    [-0.657,    -0.548,      0.42],
    [0.363,    -0.734,     -0.503],
    [-0.193,     1.95,     -0.614]
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