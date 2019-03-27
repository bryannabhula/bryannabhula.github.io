
console.log("functions js called");

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
//------------------------------------------------------------------------------
function drawCircle(x, y, R, fillC, strokeC, lineW, fill, stroke){

    ctx.beginPath();
    ctx.arc(x,y,R,0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }
    if(stroke == true){
        ctx.lineWidth = lineW;
        ctx.strokeStyle = strokeC;
        ctx.stroke();
    }
}
//------------------------------------------------------------------------------------------
var i = 0;
drawCircle(100 +100*i, 200, 50, colArray [0][4], colArray [0][6], 8, true, true );
i=1;
drawCircle(100 +100*i, 200, 50, colArray [0][4], colArray [0][6], 8, true, true );
i=2;
drawCircle(100 +100*i, 200, 50, colArray [0][4], colArray [0][6], 8, true, true );
i=3;
drawCircle(100 +100*i, 200, 50, colArray [0][4], colArray [0][6], 8, true, true );
i=4;
//functions ---------------------------------------------------------------------------------
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

function drawCircle(x,y,R,fillC,strokeC,lwidth,fill,stroke){
        ctx.beginPath()
        ctx.arc(x,y,R,0,2*Math.PI);
        if (fill == true){
            ctx.fillStyle = fillC;
            ctx.fill();
                    }
    if (stroke == true){
        ctx.strokeStyle = strokeC;
        ctx.lineWidth = lwidth;
        ctx.stroke();}
}

drawCircle(300,300,50,colArray[3], colArray[4],5, true, true);

//--------------------------------------------------------
function drawCircle(x,y,R,fillC,strokeC,lwidth,fill,stroke){
    ctx.beginPath()
    ctx.arc(x,y,R,0,2*Math.PI);
    if (fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
                }
if (stroke == true){
    ctx.strokeStyle = strokeC;
    ctx.lineWidth = lwidth;
    ctx.stroke();}
}

drawCircle(300,80,50,colArray[3], colArray[4],5, false, true);
//----------------------------------------------------------
function drawCircle(x,y,R,fillC,strokeC,lwidth,fill,stroke){
    ctx.beginPath()
    ctx.arc(x,y,R,0,2*Math.PI);
    if (fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
                }
if (stroke == true){
    ctx.strokeStyle = strokeC;
    ctx.lineWidth = lwidth;
    ctx.stroke();}
}

drawCircle(80,300,50,colArray[7], colArray[4],5, true, false);
//---------------------------------------------------------
//write text
ctx.fillStyle="rgb(0,190,255)";
var myFont= "bold 30px monospace";
ctx.font=myFont;
ctx.fillText("text test", 600,200);
