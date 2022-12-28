// Canvas & context
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d', { alpha: false });
let minimumResize = 1;
let canvasWidth = 1920;
let canvasHeight = 1080;

let wasmModule;

async function loadWasmModule() {
  obj = await WebAssembly.instantiateStreaming(await fetch('../lib/build/distributions/lib.wasm'), wasmImports) 
  wasmImports.instance = obj.instance;
  wasmModule = obj.instance.exports;
}

async function start() {
  await loadWasmModule();
  wasmModule.main();
  wasmModule.initialize();
  loop();
}

start();

function loop() {
  let framedata = wasmModule.getFrame();
  framedata = framedata["2"].map(i => i["2"].map(n => n.toString(16)));
  console.log(framedata);

  framedata.map(i => i.map(j => {
    context.fillStyle = j;
    context.fillRect(1,  1, Math.floor(canvasWidth/320), Math.floor(canvasHeight/180));

  }))

  //requestAnimationFrame(() => loop())
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
