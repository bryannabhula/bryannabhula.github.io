console.log("main js called");

var objectSet = []; 

var objectOne = new control_draw(canvas);
objectSet.push(objectOne);

//var myEllipseOne = new Ellipse (100, 100, 50, 75, 0, 0, 2 * Math.PI, colArray[3][2]); 

//var myT = new ControlObjectPush(canvas,270,20,500,560,colArray[0][0]);
// class Button (constructor) text, x, y, w, h, stroke, fill, textC, over, canvas
var rectangle = new Button("Rectangle", 40, 30, 100, 50, colArray[0][2], colArray[0][0], colArray[0][2], colArray[0][1], canvas);
var ellipse = new Button("Ellipse", 40, 100, 100, 50, colArray[0][2], colArray[0][0], colArray[0][2], colArray[0][1], canvas);
var circle = new Button("Circle", 40, 170, 100, 50, colArray[0][2], colArray[0][0], colArray[0][2], colArray[0][1], canvas);
var line = new Button("Line", 40, 240, 100, 50, colArray[0][2], colArray[0][0], colArray[0][2], colArray[0][1], canvas);
objectSet.push(rectangle, ellipse, circle, line);

//reset and undo buttons 
var reset = new Button("Reset", 40, 440, 100, 50, colArray[0][2], colArray[0][0], colArray[0][2], colArray[0][1], canvas);
var undo = new Button("Undo", 40, 510, 100, 50, colArray[0][2], colArray[0][0], colArray[0][2], colArray[0][1], canvas);
objectSet.push(reset, undo);

//Opaque Buttons 
//var colourbutton = new Swatch(x, y, w, h, stroke, fill, over, canvas);
var forest1 = new Swatch(165, 530, 40, 40, colArray[0][2], colArray[0][12], colArray[2][2], canvas);
var peach1 = new Swatch(165, 480, 40, 40, colArray[0][2], colArray[0][11], colArray[2][2], canvas);
var black1 = new Swatch(165, 430, 40, 40, colArray[0][2], colArray[0][2], colArray[2][2], canvas);
var aqua1 = new Swatch(165, 380, 40, 40, colArray[0][2], colArray[0][10], colArray[2][2], canvas);
var yellow1 =  new Swatch(165, 330, 40, 40, colArray[0][2], colArray[0][6], colArray[2][2], canvas);
var blue1 =  new Swatch(165, 280, 40, 40, colArray[0][2], colArray[0][5], colArray[2][2], canvas);
var green1 =  new Swatch(165, 230, 40, 40, colArray[0][2], colArray[0][4], colArray[2][2], canvas);
var red1 =  new Swatch(165, 180, 40, 40, colArray[0][2], colArray[0][3], colArray[2][2], canvas);
var orange1 =  new Swatch(165, 130, 40, 40, colArray[0][2], colArray[0][7], colArray[2][2], canvas);
var purple1 =  new Swatch(165, 80, 40, 40, colArray[0][2], colArray[0][8], colArray[2][2], canvas);
var pink1 = new Swatch(165, 30, 40, 40, colArray[0][2], colArray[0][9], colArray[2][2], canvas);
objectSet.push(red1, green1, blue1, yellow1, orange1, purple1, pink1, aqua1, black1, peach1, forest1);

//Semi transparent Buttons 
//var colourbutton = new Swatch(x, y, w, h, stroke, fill, over, canvas);
var forest2 =  new Swatch(210, 530, 40, 40, colArray[0][2], colArray[1][10], colArray[2][2], canvas);
var peach2 =  new Swatch(210, 480, 40, 40, colArray[0][2], colArray[1][9], colArray[2][2], canvas);
var black2 =  new Swatch(210, 430, 40, 40, colArray[0][2], colArray[1][8], colArray[2][2], canvas);
var aqua2 =  new Swatch(210, 380, 40, 40, colArray[0][2], colArray[1][7], colArray[2][2], canvas);
var yellow2 =  new Swatch(210, 330, 40, 40, colArray[0][2], colArray[1][3], colArray[2][2], canvas);
var blue2 =  new Swatch(210, 280, 40, 40, colArray[0][2], colArray[1][2], colArray[2][2], canvas);
var green2 =  new Swatch(210, 230, 40, 40, colArray[0][2], colArray[1][1], colArray[2][2], canvas);
var red2 =  new Swatch(210, 180, 40, 40, colArray[0][2], colArray[1][0], colArray[2][2], canvas);
var orange2 =  new Swatch(210, 130, 40, 40, colArray[0][2], colArray[1][4], colArray[2][2], canvas);
var purple2 =  new Swatch(210, 80, 40, 40, colArray[0][2], colArray[1][5], colArray[2][2], canvas);
var pink2 =  new Swatch(210, 30, 40, 40, colArray[0][2], colArray[1][6], colArray[2][2], canvas);
objectSet.push(red2, green2, blue2, yellow2, orange2, purple2, pink2, aqua2, black2, peach2, forest2);

//Transparent Buttons
//var colourbutton = new Swatch(x, y, w, h, stroke, fill, over, canvas);
var forest3 =  new Swatch(255, 530, 40, 40, colArray[0][2], colArray[2][10], colArray[2][2], canvas);
var peach3 =  new Swatch(255, 480, 40, 40, colArray[0][2], colArray[2][9], colArray[2][2], canvas);
var black3 =  new Swatch(255, 430, 40, 40, colArray[0][2], colArray[2][8], colArray[2][2], canvas);
var aqua3 =  new Swatch(255, 380, 40, 40, colArray[0][2], colArray[2][7], colArray[2][2], canvas);
var yellow3 =  new Swatch(255, 330, 40, 40, colArray[0][2], colArray[2][3], colArray[2][2], canvas);
var blue3 =  new Swatch(255, 280, 40, 40, colArray[0][2], colArray[2][2], colArray[2][2], canvas);
var green3 =  new Swatch(255, 230, 40, 40, colArray[0][2], colArray[2][1], colArray[2][2], canvas);
var red3 =  new Swatch(255, 180, 40, 40, colArray[0][2], colArray[2][0], colArray[2][2], canvas);
var orange3 =  new Swatch(255, 130, 40, 40, colArray[0][2], colArray[2][4], colArray[2][2], canvas);
var purple3 =  new Swatch(255, 80, 40, 40, colArray[0][2], colArray[2][5], colArray[2][2], canvas);
var pink3 =  new Swatch(255, 30, 40, 40, colArray[0][2], colArray[2][6], colArray[2][2], canvas);

objectSet.push(red3, green3, blue3, yellow3, orange3, purple3, pink3, aqua3, black3, peach3, forest3);

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

