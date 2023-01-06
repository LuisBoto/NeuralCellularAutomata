// Canvas & context
let canvas = document.getElementById("canvas");
const gl = canvas.getContext('webgl2', { premultipliedAlpha: false });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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