console.log("drawing js called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

var colArray=[
    "rgb(255,255,255)", "rgb(153,153,153)", "rgb(0,0,0)", 
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgb(0,153,204)"
    ]
console.log( colArray[0] )
//---------------------------------------------------------    

function drawRectangle(x,y,w,h,fcol,scol,lw){
    ctx.fillStyle=colArray[1];
    ctx.strokeStyle=colArray[8];
    ctx.lineWidth=lw;
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fill();
    ctx.stroke();   
    ctx.fillStyle=scol;
    ctx.beginPath();
    ctx.arc(x+w/2, y+h/2, h/2, 0, 2*Math.PI);
    ctx.fill();
}

drawRectangle(10,100,250,95, colArray[2],colArray[6],2);
//----------------------------------------------------------




