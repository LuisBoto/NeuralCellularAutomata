let kernel = [
    [-0.156,    0.207,      0.476],
    [0.643,    -0.153,     -0.252],
    [-0.6,      0.313,     -0.982]
]

self.onmessage = function(e) {
    if(e.data === undefined) 
        return;
    let updatedCells = processUpdates(e.data);
    self.postMessage(updatedCells)
    self.close();
}

function processUpdates(cellArray) {
    for (let i=0; i<cellArray.length; i++)
        for (let j=0; j<cellArray[i].length; j++)
            cellArray[i][j] = update(cellArray[i][j]);
    return cellArray;
}


function update(cell) {
    let totalState = 0;
    for (let neighbor of cell.neighbors) {
        totalState += neighbor.cell.state * neighbor.kernelValue;
    }
    cell.state = totalState + cell.state*kernel[1][1];      
    cell.state = cutState(cell.state);
    return cell;
}

function cutState(state) {
    if (state > 1) 
        return 1;
    if (state < 0) 
        return 0;
    return state;
}