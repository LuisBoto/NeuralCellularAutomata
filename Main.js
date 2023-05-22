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

const ongoingTouches = [];
window.addEventListener("pointerdown", handleStart, false);
window.addEventListener("pointermove", handleMove, false);
window.addEventListener("pointerup", handleEnd, false);
window.addEventListener("pointercancel", handleEnd, false);

function handleStart(event) {
    ongoingTouches.push(event);
    layer.handleTouch(ongoingTouches);
}

function handleMove(event) {
    let movingPointers = ongoingTouches.findIndex((tch) => tch.pointerId == event.pointerId);
    if (movingPointers >= 0) {
        ongoingTouches.splice(movingPointers, 1, event); 
        layer.handleTouch(ongoingTouches);
    }
}

function handleEnd(event) {
    let touchIndex = ongoingTouches.findIndex((tch) => tch.pointerId == event.pointerId)
    ongoingTouches.splice(touchIndex, 1); 
}

start();