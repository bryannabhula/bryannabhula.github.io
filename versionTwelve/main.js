
var objectSet = []; // clearing the object set list

var objectOne = new control_draw(canvas);
objectSet.push(objectOne);

// class Button (constructor) text, x, y, w, h, stroke, fill, textC, over, canvas
//these are the buttons to for the shape buttons 

var shape1 = new Button("Rectangle", 35, 35, 130, 40, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var shape2 = new Button("Ellipse", 35, 85, 130, 40, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var shape3 = new Button("Circle", 35, 135, 130, 40, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var shape4 = new Button("Line", 35, 185, 130, 40, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var shape5 = new Button("Square", 35, 235, 130, 40, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var shape6 = new Button("Custom Draw", 35, 385, 130, 40, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var shape7 = new Button("Rotation", 35, 335, 130, 40, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var shape8 = new Button("Diamond", 35, 285, 130, 40, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
objectSet.push(shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8);

//width button for the size of brush
var sWidth = new CustomWidth("S", 35, 425, 30, 30, 5, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var mWidth = new CustomWidth("M", 85, 425, 30, 30, 10, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var lWidth = new CustomWidth("L", 135, 425, 30, 30, 15, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
objectSet.push(sWidth,mWidth,lWidth);

//reset and undo buttons 
var reset = new Button("Reset", 50, 475, 95, 40,colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
var undo = new Button("Undo", 50, 525, 95, 40, colArray[3][2], colArray[3][0], colArray[3][2], colArray[3][1], canvas);
objectSet.push(reset, undo);

//Opaque colour Buttons, using O(number) as variable. O = Opaque
//var colourbutton = new Swatch(x, y, w, h, stroke, fill, over, canvas);

//This is the loop for my colour buttons, which uses the Swatch class 
//
for(var j = 0; j<3; j ++ ){
    for(var i = 0; i <11; i++){
    var temp =  new Swatch(200 + 50*i, 430 + 50*j, 40, 40, colArray[0][2], colArray[j][i], colArray[2][2], canvas);
    objectSet.push(temp);
}
}


function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();

    }
    window.requestAnimationFrame(animate);
}
animate();


// for boundscheck, look at the buttons js boundscheck, then insert the same bounds concepts  

