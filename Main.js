// Canvas & context
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d', { alpha: false });
let minimumResize = 1;
let canvasWidth = 1920;
let canvasHeight = 1080;

let layer;

function start() {
    layer = new MainLayer();
    requestAnimationFrame(() => loop());
}

function loop(){
    layer.update();
    layer.draw();
    requestAnimationFrame(() => loop());
}

// Resize
window.addEventListener('load', resize, false);
function resize() {
    console.log("Resize")
    let resizeWidth = parseFloat(window.innerWidth*0.89 / canvas.width);
    let resizeHeight = parseFloat(window.innerHeight*0.89 / canvas.height);

    minimumResize = Math.min(resizeWidth, resizeHeight);
    canvas.width = canvas.width*minimumResize;
    canvas.height = canvas.height*minimumResize;

    context.scale(minimumResize, minimumResize);
}

start();
