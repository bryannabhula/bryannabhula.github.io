console.log("init js called");
// ----------------- set up code includes resolution management
var myScale = 0;

function setupCanvas(canvas) {
// Get the device pixel ratio, falling back to 1.
var dpr = window.devicePixelRatio || 1;
myScale=dpr;
// Get the size of the canvas in CSS pixels.
var rect = canvas.getBoundingClientRect();
console.log(rect.width);
console.log(rect.height);
// Give the canvas pixel dimensions of their CSS
// size * the device pixel ratio.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
var ctx = canvas.getContext('2d');
// Scale all drawing operations by the dpr, so you
// don't have to worry about the difference.
ctx.scale(dpr, dpr);
return ctx;
}
// basic drawing on the canvas with no functions


// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
const width = canvas.width/myScale;
const height = canvas.height/myScale;

//--------------------
var colArray=[
    [
    "rgba(205, 222, 235,1)"/*colour of rectDrawSpace */, "rgba(153,153,153,1)"/* grey */, "rgba(0,0,0,1)"/* black */, 
    "rgba(204,0,0,1)","rgba(255,204,51,1)","rgba(51,51,255,1)",
    "rgba(0,153,204,1)","rgba(255,255,153,1)","rgba(255,255,102,1)"
    ],
    [
        "rgba(30,144,255,1)"/* blue button colour */, "rgba(255, 215, 0,1)"/* yellow button colour */, "rgba(0, 204, 0, 1)"/* green button colour */, 
        "rgba(204, 0, 0, 1)"/* red button colour */,"rgba(255,204,51,0.67)","rgba(51,51,255,0.67)",
        "rgba(0,153,204,0.67)","rgba(255,255,153,0.67)","rgba(255,255,102,0.67)"
        ],
    [
        "rgba(255,255,255,0.33)", "rgba(153,153,153,0.33)", "rgba(0,0,0,0.33)", 
        "rgba(204,0,0,0.33)","rgba(255,204,51,0.33)","rgba(51,51,255,0.33)",
        "rgba(0,153,204,0.33)","rgba(255,255,153,0.33)","rgba(255,255,102,0.33)"
        ]
    ]
//----------------------------
    class Button{
        constructor(text, x, y, w, h, stroke, fill, textC, over, canvas, target){
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.stroke = stroke;
            this.fill = fill;
            this.textC = textC;
            this.text = text;
            this.over = over;
            this.target = target;
            this.selected = false;

            //this.tC = tC;
    
    
    
            //declare that the mouse location starts at 0
            this.xMouse = 0;
            this.yMouse = 0;
    
            this.rectBound = false;
            this.click = false;
    
            this.element = canvas;
            this.element.addEventListener('mousedown', this.mDown.bind(this));
            this.element.addEventListener('mousemove', this.mMove.bind(this));
    
        }
    
        mDown(e){
            if(this.rectBound == true){
                
                //Button.selected = this;
                this.selected = true;
                this.target.setColour(this.fill);
                //this.makeRandomColor()
            }
        
        }
    
        mMove(e){
            this.xMouse = e.offsetX;
            this.yMouse = e.offsetY;
            console.log("mouse move"); 
            this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
        }
    
        /*update(){
            this.draw();
            this.writeText();
        }*/
    
        draw(){
            if(Button.selected == this  ){
                ctx.fillStyle = "rgb(255,255,255)"
               
            }
            else if( this.rectBound ){
                ctx.fillStyle = this.over;
               
            }else{
                ctx.fillStyle = this.fill
            }
            
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.w, this.h);
            // ctx.fillText(this.text, this.w/2,this.h/2 );
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = 10;
            ctx.fill();
            ctx.stroke();
    
        }
    
        /*writeText(){
            ctx.fillStyle = this.textC;
            ctx.font = "25px sans-serif";
            ctx.textAlign = "center";
            const baseline = ['middle'];
            ctx.textBaseline = baseline;
            ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
        }*/
    
        boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true;
        }else{
            return false;
        }
        }
    
    }
   // Button.selected = "";
    