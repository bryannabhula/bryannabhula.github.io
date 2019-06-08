//console.log("swatch js called");

class Swatch{
    constructor(x, y, w, h, stroke, fill, over, canvas){
        // declaring what each variables are 
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.over = over;

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        this.overShape = false;
        this.click = false;

        this.element = canvas;
        this.element.addEventListener('click', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        if(this.overShape == true){
            Swatch.selected = this;
            Swatch.selectedColour = this.fill; 

        }
}

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //check if in the boundary 
        this.overShape = this.rectBounds(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.fillStyle = this.fill;
        ctx.lineWidth =1; // line width of the button
        ctx.fill();
        ctx.stroke();
    }
    
    //if statement to create the rectangle boundary 
    rectBounds(xM, yM, x, y, w, h){
    if(xM > x && xM < x + w && yM > y && yM < y + h){
        return true;
    }else{
        return false;
        }
    }
    
}
Swatch.selected = ""; 
Swatch.selectedColour = "rgba(0,0,25,0.33)"; //default colour when there is no colour selected