console.log("colourrect js called");

//this is the class for the canvas rectangle 
class RectangleCanvas{
    constructor(x, y, w, h, c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = c1;
        
    }
    update(){
        this.draw();

    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h,);
        ctx.fillStyle = this.fill;
        ctx.fill();
    
    }

    setColour(c){
        this.fill = c;
        
    }
}
//this is the class for the drawing rectangle 
class ControlObjectPush{
    constructor(canvas,x,y,width,height,fill){

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        //this.sh = 0;
        //this.sw = 0;

        //creating parameters for rectangle drawing canvas 
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.dragFill = colArray[0][1];



        this.w = 0;
        this.h = 0;

        this.objectSet = [];

        //boundaries for dragging 
        this.inBounds = false;
        this.startInBounds = false;
        this.endInBounds = false;
        this.mouseDown = false;


        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

    }
    mDown(e){
        this.xMouseStart= e.offsetX;
        this.yMouseStart = e.offsetY;

        if(this.inBounds == true){
            this.mouseDown = true;
        }
        else{
            this.mouseDown = false;
        }
        //setting drawing boundaries


    }

    mMove(e){
        this.xMouse= e.offsetX;
        this.yMouse = e.offsetY;
        this.inBounds = this.testBounds(this.xMouse,this.yMouse,this.width,this.height,this.x,this.y);
    }

    mUp(e){
        
        this.mouseDown = false;

        this.xMouse= e.offsetX;
        this.yMouse = e.offsetY;

        this.startInBounds = this.testBounds(this.xMouseStart,this.yMouseStart,this.width,this.height,this.x,this.y);
        this.endInBounds = this.testBounds(this.xMouse,this.yMouse,this.width,this.height,this.x,this.y);
        // should pass the class through but have not just to keep things simple

        if(this.startInBounds == true && this.endInBounds == true){
            var myObject = new RectangleCanvas(this.xMouseStart, this.yMouseStart, this.w, this.h, this.dragFill);

            this.objectSet.push(myObject);
            console.log(this.objectSet);
        }


    }

    setColour(c){
        this.dragFill = c;
    }
    update(){
        this.drawBase();
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;

        //absolute values for the width and height 
        /*if(Math.abs(this.w) < Math.abs(this.h)){
            this.sw = this.w;
            this.sh = this.w;

           
        }*/

        for(var i=0 ; i< this.objectSet.length ; i++){
            this.objectSet[i].update();

        }

        if(this.mouseDown && this.inBounds){
            console.log("mouse is down");
            this.draw();
        }

    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);

    }

    drawBase(){
        ctx.beginPath();
        ctx.rect(this.x, this.y,this.width, this.height);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    drawRect(x,y, w,h){
        ctx.beginPath();
        ctx.rect(x, y, w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(20, 230, 200)";
        ctx.stroke();
    }

    testBounds(xM,yM,width,height,x,y){
        if(xM > x && xM < x+width && yM > y && yM < y+height){
            return true;
        }
        else{
            return false;
        }
    }


}
