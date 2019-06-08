console.log("object js called");

// class Rectangle takes x, y, w, h (integers), color as rgba string(colArray)
class Rectangle{
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
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
        
    }
}   

// class ellipse (x, y, radiusX, radiusY, rotation, startAngle, endAngle, colour)
class Ellipse{
    constructor(xS, yS, xM, yM, c1){ 
        this.xC = (xS + xM)/2; // centre x
        this.yC = (yS + yM)/2; // centre y
        this.radiusX = Math.abs((xM - xS)/2); //Math.abs is to make sure the values are always positive
        this.radiusY = Math.abs((yM - yS)/2);
        this.rotation = 0;
        this.startAngle = 0;
        this.endAngle = 2*Math.PI;
        this.fill = c1;
    }


    update(){
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.ellipse(this.xC, this.yC, this.radiusX, this.radiusY, this.rotation, this.startAngle, this.endAngle);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}

// class Circle (x, y, radiusX, radiusY, rotation, startAngle, endAngle, colour)
class Circle{
    constructor(xS, yS, xM, yM, c1){
        this.xC = (xS + xM)/2; // centre x
        this.yC = (yS + yM)/2; // centre y
        this.radiusX = Math.abs( (xM - xS)/2 ); //Math.abs is to make sure the values are always positive
        this.radiusY = Math.abs( (yM - yS)/2 );
        this.r = 0;
        if(this.radiusX <this.radiusY){
            this.r = this.radiusX;
        }
            else{
                this.r = this.radiusY
            };
        
        this.fill = c1;
    }

    update(){
        
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}


class Line{
    constructor(xS, yS, xM, yM, sCol){
        //Variables required for line
        this.xS = xS;
        this.yS = yS;
        this.xM = xM;
        this.yM = yM;
        this.fill = sCol;
    }
    update(){
        //Calling for line to be drawn
        this.draw();
    }
    draw(){
        //line function
        ctx.strokeStyle = this.fill;
        ctx.lineWidth = 10; // width of the line drawn
        ctx.lineCap = "round"; //defining the shape of the end of the lines drawn
        ctx.beginPath();
        ctx.moveTo(this.xS, this.yS);
        ctx.lineTo(this.xM, this.yM);
        ctx.stroke();
    }
}


class CustomDraw{
    constructor(xM, yM, c1){
        this.xC = xM; // centre x
        this.yC = yM; // centre y
        this.r = 10; //radius
        this.fill = c1; //fill colour
    }

    update(){
        this.draw(); //calling for the object to be drawn
    }

    draw(){
        //customDraw function
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}