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
        this.sh = 0;
        this.sw = 0;

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

  
        this.mouseDown = false;
        


        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

    }
    mDown(e){
        this.xMouseStart= e.offsetX;
        this.yMouseStart = e.offsetY;

        this.mouseDown = true;

    }

    mMove(e){
        this.xMouse= e.offsetX;
        this.yMouse = e.offsetY;
  
    }

    mUp(e){
        
        this.mouseDown = false;

        this.xMouse= e.offsetX;
        this.yMouse = e.offsetY;

        var myObject = new RectangleCanvas(this.xMouseStart, this.yMouseStart, this.w, this.h, this.dragFill);

            this.objectSet.push(myObject);



    }

    setColour(c){
        this.dragFill = c;
    }
    update(){
        this.drawBase();
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;

        //absolute values for the width and height 
        if(Math.abs(this.w) < Math.abs(this.h)){
            this.sw = this.w;
            this.sh = this.w;

           
        }

        for(var i=0 ; i< this.objectSet.length ; i++){
            this.objectSet[i].update();

        }

        if(this.mouseDown){
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

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x, y, w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(20, 230, 200)";
        ctx.stroke();
    }


}
