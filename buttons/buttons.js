console.log("button1 js called");

class Button{
    constructor(text, x, y, w, h, stroke, fill, textC, over, canvas){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.textC = textC;
        this.text = text;
        this.over = over;

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        this.Bound = false;

        this.element = canvas;
        //this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        //this.element.addEventListener('mouseup', this.mUp.bind(this));

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        console.log("mouse move"); 
        this.Bound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        this.draw();
        this.writeText();
        }

    draw(){
        if(this.Bound){
            ctx.fillStyle = this.over;
        }
        else{
            ctx.fillStyle = this.fill;
        }
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        // ctx.fillText(this.text, this.w/2,this.h/2 );
        ctx.strokeStyle = this.stroke;
        ctx.fill();
        ctx.stroke();
    }

    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "30px sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }
    
    boundsCheck(xM, yM, x, y, w, h){
        if(xM > x && xM< x + w&& yM> y && yM < y + h){
            return true;
        }
        else{
            return false;
        }
    }

    addEventListener(){

    }
    //button.select = this.button.select
    //if button.select = (this)
    //bierubfuiefre

}