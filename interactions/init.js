console.log("init js file has been called");

var myScale = 0;



function setupCanvas(canvas) {
    var dpr = window.devicePixelRatio || 1;
    myScale=dpr;
    var rect = canvas.getBoundingClientRect();
    console.log(rect.width);
    console.log(rect.height);

    canvas.width = rect.width = dpr;
    canvas.height = rect.height = dpr;
    var ctx = canvas.getContext('2d');
    
    ctx.scale(dpr, dpr);
    return ctx;
}

var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
const width = canvas.width/myScale;
const height = canvas.height/myScale;
console.log(width);
console.log(height);