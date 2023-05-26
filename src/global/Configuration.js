let columnNumber = window.innerWidth, rowNumber = window.innerHeight;
let activationFunctionBody = "return x > 1 ? 1 : x < 0 ? 0 : x;";
let loopID;
let cellColor = hexToRgb("00f200");

let kernel = [[0.8,    -0.85,      0.8],
              [-0.85,    -0.2,     -0.85],
              [0.8,     -0.85,     0.8]]

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return {r,g,b};
}

function updateActivation() {
    try {
        eval( "function activation(x) { " + activationFunctionBody + " }" )
        for (let i = -5; i <= 5; i++) activation(i); // Try for runtime errors
    } catch (err) {
        console.log(err);
        return;
    }
    window["activation"] = activation;
};

function updateConfiguration() {
    columnNumber = parseInt(document.getElementById("inputColumnNumber").value);
    rowNumber = parseInt(document.getElementById("inputRowNumber").value);
    activationFunctionBody = document.getElementById("activationFunctionBody").value;
    updateKernelValues();

    updateActivation();
    layer.initiate();
}

function updateInputFieldsValues() {
    document.getElementById("inputColumnNumber").value = columnNumber;
    document.getElementById("inputRowNumber").value = rowNumber;
    document.getElementById("activationFunctionBody").value = activationFunctionBody;
    updateKernelInputFieldValues();
}

function updateKernelValues() {
    let kernelInputs = document.getElementById("kernelInput").children;
    let newKernel = [[],[],[]];
    for (let i=0; i<3; i++)
        for (let j=0; j<3; j++) 
            newKernel[i].push(parseFloat(kernelInputs[i*3+j].value));
    kernel = newKernel;    
}

function updateKernelInputFieldValues() {
    let kernelInputs = document.getElementById("kernelInput").children;
    for (let i=0; i<3; i++)
        for (let j=0; j<3; j++) 
            kernelInputs[i*3+j].value = kernel[i][j];
}

updateInputFieldsValues();
updateActivation();
