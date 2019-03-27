console.log("main js called");

objectSet = [];

var BBOne = new BouncingBall(340,200,150,270, colArray[5], 10, 5, 2);
var BBTwo = new BouncingBall(300,200,150,270, colArray[4], 10, -4, 1);
var BBThree = new BouncingBall(260,200,150,270, colArray[6], 10, 3, -3);
BBOne.update();
objectSet.push(BBOne, BBTwo, BBThree);

function animate(){
    ctx.clearRect(0,0, width, height);

    for(var i = 0; i<objectSet.length; i++){
        objectSet[i].update();
    }
    



    window.requestAnimationFrame(animate);
}

animate(); 
