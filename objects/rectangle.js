console.log("rectangle js called");

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

class Rectangle {
    constructor (x,y,w,h,c1){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.fill=c1
    }
    update(){
        this.draw()

    }

    draw(){
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.w, this.h,)
        ctx.fillStyle=this.fill;
        ctx.fill();
    
    }
}
