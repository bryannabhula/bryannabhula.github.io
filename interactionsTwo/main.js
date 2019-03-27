console.log("main js called");

var myT = new ControlObject(canvas);








function animate(){
    ctx.clearRect(0, 0, width, height);
    myT.update();
    ctx.beginPath()
    ctx.rect(10,10,100,100);
    ctx.fillStyle="rgb(255,0,0)";
    ctx.fill();



    
    window.requestAnimationFrame(animate);
}

animate();
