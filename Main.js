// Canvas & context
let canvasWidth = 1920;
let canvasHeight = 1080;

let canvas = document.getElementById("canvas");
//let context = canvas.getContext('2d');
const gl = canvas.getContext('webgl2', { premultipliedAlpha: false });

let layer;

function start() {
    layer = new MainLayer();
    loadPreset(0);
    loop();
}

function loop(){
    layer.update();
    layer.draw();
    requestAnimationFrame(() => loop());
}

start();