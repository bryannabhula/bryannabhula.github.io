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
//draw rectangle 
ctx.fillStyle= (colArray[1]);
ctx.strokeStyle=(colArray[4]);
ctx.lineWidth= 10;
ctx.beginPath();
ctx.rect(10,10,100,100);
ctx.stroke();
ctx.fill();

//draw rectangle 
ctx.fillStyle= 'rgb(10, 200, 204)';
ctx.strokeStyle='rgb(122,0,2)';
ctx.lineWidth= 20;
ctx.beginPath();
ctx.rect(120,250,210,90);
ctx.stroke();
ctx.fill();

//draw line
ctx.strokeStyle="rgb(55,100,50)";
ctx.lineWidth=5;
ctx.beginPath();
ctx.moveTo(10,150);
ctx.lineTo(300,210);
ctx.stroke();

//draw polyline with closure
ctx.strokeStyle="rgb(255,102,102)";
ctx.fillStyle="rgb(255,255,153)";
ctx.lineWidth=10;
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(400,250);
ctx.lineTo(250,300);
ctx.lineTo(300,400);
ctx.closePath();
ctx.stroke();
ctx.fill();

//draw circle
ctx.fillStyle="rgb(200,140,70)"
ctx.strokeStyle="rgb(51,51,189)"
ctx.lineWidth=10;
ctx.beginPath()
ctx.arc(200, 60, 50,0, 2*Math.PI);
ctx.stroke();
ctx.fill();

//draw shape with gradient 

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "rgb(200,140,70)");
grd.addColorStop(1, "rgb(51,51,181)");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 100, 100);


