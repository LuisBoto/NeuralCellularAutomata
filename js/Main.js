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
  let wasmtime = Date.now();
  let framedata = wasmModule.getFrame();
  console.log("Frame wasm time "+ (Date.now() - wasmtime));
  let jstime = Date.now();
  framedata = framedata["2"].map(i => i["2"].map(n => {
    n = n.toString(16);
    if (n.lenght <= 1) n= '#0000000' + n 
    else n= "#000000"+n;
    return n;
  }));
  //console.log(framedata);

  context.fillStyle = "#fff"
  context.fillRect(0, 0, canvasWidth, canvasHeight);
  for (let i=0; i<320; i++) {
    for (let j=0; j<180; j++) {
      context.fillStyle = framedata[i][j];
      context.fillRect(canvasWidth/320*i,  canvasHeight/180*j, Math.floor(canvasWidth/320), Math.floor(canvasHeight/180));
    }
  }
  console.log("Js time " + (Date.now() - jstime))
  requestAnimationFrame(() => loop())
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
