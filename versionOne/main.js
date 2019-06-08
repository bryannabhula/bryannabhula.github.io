console.log("main js called");

var objectSet = []; 

/*var rectCanvas = new RectangleCanvas(270,20,500,560, colArray[0][0]);
    rectCanvas.update();
    objectSet.push(rectCanvas);

    //calling different buttons and customising parameters 
var buttonOne = new Button("Blue", 50, 80, 100, 100, colArray[0][2], colArray[1][0], colArray[0][2], colArray[0][1], canvas, myT, colArray[1][0]);
var buttonTwo = new Button("Yellow", 50, 200, 100, 100, colArray[0][2], colArray[1][1], colArray[0][2], colArray[0][1], canvas, myT, colArray[1][1]);
var buttonThree = new Button("Green", 50, 320, 100, 100, colArray[0][2], colArray[1][2], colArray[0][2], colArray[0][1], canvas, myT, colArray[1][2]);
var buttonFour = new Button("Red", 50, 440, 100, 100, colArray[0][2], colArray[1][3], colArray[0][2], colArray[0][1], canvas, myT, colArray[1][3]);
objectSet.push(buttonOne, buttonTwo, buttonThree, buttonFour);
*/
//parameters of the rectangle canvas 
var myT = new ControlObjectPush(canvas,270,20,500,560,colArray[0][0]);

function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();

    }
    myT.update();

    window.requestAnimationFrame(animate);
}
animate();


// for boundscheck, look at the buttons js boundscheck, then insert the same bounds concepts  
//into the rectangle constructor on the basicrect.js then test

