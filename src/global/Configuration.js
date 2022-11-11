let columnNumber = 160, rowNumber = 90;
let fps = 5;
let loopID;

let kernel = [
    [-0.156,    0.207,      0.476],
    [0.643,    -0.153,     -0.252],
    [-0.6,      0.313,     -0.982]
]

function updateConfiguration() {
    columnNumber = parseInt(document.getElementById("inputColumnNumber").value);
    rowNumber = parseInt(document.getElementById("inputRowNumber").value);

    updateCellPopulation();
}

function updateCellPopulation() {
    clearInterval(loopID); // Stops loop
    layer.recreateCellMatrix();
    startCanvasLoop();
}

function updateInputFieldsValues() {
    document.getElementById("inputColumnNumber").value = columnNumber;
    document.getElementById("inputRowNumber").value = rowNumber;
}

function startCanvasLoop() {
    loopID = setInterval(loop, 1000 / fps);
}

updateInputFieldsValues();