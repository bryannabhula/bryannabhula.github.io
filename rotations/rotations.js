function drawRectangle(x,y,w,h, fillC, strokeC, lw, fill, stroke){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    if(fill ==true){
        ctx.fillStyle = fillC;
        ctx.fill();
    
    }
    if(stroke == true){
        ctx.lineWidth = lw;
        ctx.strokeStyle = strokeC
        ctx.stroke();
    }
}

function drawCircle(x,y,r, fillC, strokeC, lw, fill, stroke){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();

    }
    if(stroke == true){
        ctx.linewidth = lw;
        ctx.strokeStyle = stroke;
        ctx.stroke();
    }
}

ctx.save();
ctx.translate(300,200);
drawCircle(0,0,20,"", colArray[3], 2, false, true);
drawRectangle(0,0,100,200, colArray[4], colArray[2], 5, true, true)
ctx.restore();
