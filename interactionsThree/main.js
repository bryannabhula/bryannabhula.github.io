console.log("main js called");


var myT = new ControlObjectSquare(canvas);


function animate(){
    ctx.clearRect(0, 0, width, height);
    myT.update();
    


    window.requestAnimationFrame(animate);
}

animate();