class control_draw{
    constructor(canvas){
        // set objectset to an empty list, so all drawn objects will disappear and the application will reset to clear canvas
        this.objectSet = [];

        console.log("test object constructor");

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;


        this.mouseDown = false;

        // size and coordinates of the rectangle canvas
        this.x = 320;
        this.y = 30;
        this.w = 455;
        this.h = 535;
        this.dx = 0;
        this.dy = 0;

        this.rectBound = false;

        this.element = canvas;

        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

            

    }

        mDown(e){
            this.xMouseStart = e.offsetX;
            this.yMouseStart = e.offsetY;
            if(this.rectBound == true){
                this.mouseDown = true;
            }
            //console.log(Button.selectedShape);
         //knowing which shape is selected with what button
        }
        

        mMove(e){
            this.xMouse = e.offsetX;
            this.yMouse = e.offsetY;
            this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
            if(this.mouseDown == true && this.rectBound == true){
                if(Button.selectedShape == "Custom Draw"){
                    var temp4 = new CustomDraw(this.xMouse, this.yMouse, Swatch.selectedColour);
                    this.objectSet.push(temp4);
                }
            }  
            //console.log("mouse move event");
        }

        //colArray here changes colours of the rectangle 
        mUp(e){
            console.log(Swatch.selectedColour);
            if(this.mouseDown == true && this.rectBound == true){//if the mouse is clicked within the boundary
                console.log(Swatch.selectedColour);
                if (Button.selectedShape == "Rectangle"){
                    var temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.dx, this.dy, Swatch.selectedColour);
                    this.objectSet.push(temp);
                }
                else if(Button.selectedShape == "Ellipse"){
                    var temp1 = new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.selectedColour);
                    this.objectSet.push(temp1);
                } 
                else if(Button.selectedShape == "Circle"){
                    var temp2 = new Circle(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.selectedColour);
                    this.objectSet.push(temp2);
                }
                else if(Button.selectedShape == "Line"){
                    var temp3 = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Swatch.selectedColour);
                    this.objectSet.push(temp3);
                }// matching buttons with classes 
            }

            console.log(Button.selected);
            console.log(Button.selectedShape);
            if (Button.selectedShape == "Reset"){
                this.objectSet = []; // clearing the object set (all objects drawn on the rectangle canvas)
                Button.selected = "";
        
            } 
    
            // making an undo button
            if (Button.selectedShape == "Undo"){
                this.objectSet.pop(); // remove the last object that was drawn
                Button.selected = "";
            }
            
      
            this.mouseDown = false;

        }

        update(){
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.w, this.h); //for the boundary
            ctx.fillStyle = colArray[0][0]; //colour
            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = 4;
            ctx.fill();
            ctx.stroke();
    

            for(var i = 0; i < this.objectSet.length; i++){
                this.objectSet[i].update();
                //console.log('object set updated');
            }

            this.dx = this.xMouse - this.xMouseStart;
            this.dy = this.yMouse - this.yMouseStart;
            //allows the guide rectangle outline to be drawn
            if(this.mouseDown == true && this.rectBound == true){
                // this draws the guide rectangle outline
                console.log("draw");
                this.draw();
            }
            
        }

        // this draws the rectangle guide outline for all shape buttons except custom draw
        draw(){
            if(Button.selectedShape == "Rectangle" || Button.selectedShape == "Ellipse" || Button.selectedShape == "Circle" || Button.selectedShape == "Line"){
                this.drawRect(this.xMouseStart, this.yMouseStart, this.dx, this.dy, colArray[0][4]);
            }
        }

        // this function is to drag a rectangle out 
        drawRect(x,y,w,h){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.lineWidth = 1;
            ctx.strokeStyle = colArray[0][2]; // defining what colour the stroke is when we draw the rectangle
            ctx.stroke();
        }

        // this function is to create the boundary rectangle canvas
        drawBoundaryRect(x,y,w,h,col){
            ctx.beginPath();
            ctx.rect(x,y,w,h);
            ctx.fillStyle = col; //determines the colour of the fill of the dragging rectangle 
            ctx.fill();
        }
    
        // this is checking boundary
        boundsCheck(xMouse, yMouse, x, y, w, h){ 
            if(xMouse > x && xMouse < x + w && yMouse > y && yMouse < y+ h){
                return true;
            }else{
                return false;
            }
        }
            
    
}