console.log("main js called");

var objectSet = [];

var DragOne = new Button("click me", 200, 120, 200,100,"rgb(200,100,50)", "rgb(30,222,100)", "rgb(30,22,10)", "rgb(30,200,10)", canvas);
objectSet.push(DragOne);

function animate(){
    ctx.clearRect(0,0,width, height);
    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();

    }

    window.requestAnimationFrame(animate);

}
animate();

