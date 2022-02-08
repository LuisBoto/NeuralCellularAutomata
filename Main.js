// Canvas & context
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var minimumResize = 1;
var canvasWidth = 1920;
var canvasHeight = 1080;

var layer;
var populationSize = 100;

function startGame() {
    layer = new MainLayer();
    setInterval(loop, 1000 / 30);
}

function loop(){
    layer.update();
    layer.draw();
}

// Resize
window.addEventListener('load', resize, false);
function resize() {
    console.log("Resize")
    var resizeWidth = parseFloat(window.innerWidth / canvas.width);
    var resizeHeight = parseFloat(window.innerHeight / canvas.height);

    minimumResize = Math.min(resizeWidth, resizeHeight);
    canvas.width = canvas.width*minimumResize;
    canvas.height = canvas.height*minimumResize;

    context.scale(minimumResize, minimumResize);
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI/180);
}
