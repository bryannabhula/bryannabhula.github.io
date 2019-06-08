console.log("main js called");

var objectSet = []; 

var objectOne = new control_draw(canvas);
objectSet.push(objectOne);

//var myEllipseOne = new Ellipse (100, 100, 50, 75, 0, 0, 2 * Math.PI, colArray[3][2]); 

//var myT = new ControlObjectPush(canvas,270,20,500,560,colArray[0][0]);
// class Button (constructor) text, x,y, w, h, stroke, fill, textC, over, canvas
var butOne = new Button("Rectangle", 50, 120, 120, 50, colArray[2][2], colArray[2][0], colArray[0][2], colArray[2][1], canvas);
var butTwo = new Button("Ellipse", 50, 190, 120, 50, colArray[2][2], colArray[2][0], colArray[0][2], colArray[2][1], canvas);
objectSet.push(butOne, butTwo);


function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();

    }
    
    //myEllipseOne.update();
    //myT.update();

    window.requestAnimationFrame(animate);
}
animate();


// for boundscheck, look at the buttons js boundscheck, then insert the same bounds concepts  
//into the rectangle constructor on the basicrect.js then test

