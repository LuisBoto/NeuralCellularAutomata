// Canvas & context
let canvasWidth = 1920;
let canvasHeight = 1080;

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let layer;

function start() {
    layer = new MainLayer();
    loop();
}

function loop(){
    layer.update();
    layer.draw();
    requestAnimationFrame(() => loop());
}

// Resize
window.addEventListener('load', resize, false);
function resize() {
    console.log("Resize");
    let resizeWidth = parseFloat(window.innerWidth*0.80 / canvas.width);
    let resizeHeight = parseFloat(window.innerHeight*0.80 / canvas.height);

    let minimumResize = Math.min(resizeWidth, resizeHeight);
    canvas.width = canvas.width*minimumResize;
    canvas.height = canvas.height*minimumResize;
  
    context.scale(minimumResize, minimumResize);
    start();
}
