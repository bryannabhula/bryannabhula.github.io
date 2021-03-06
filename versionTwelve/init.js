// ----- set up code includes resolution management ------
var myScale = 0;
    
function setupCanvas(canvas) {
  // Get the device pixel ratio, fall back to 1.
  var dpr = window.devicePixelRatio || 1;
  myScale=dpr;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  // Scale all drawing operations by the dpr
  ctx.scale(dpr, dpr);
  return ctx;
}
// basic drawing on the canvas with no functions


// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
const width = canvas.width/myScale;
const height = canvas.height/myScale;


//---------------------------------------------------------------------------------------------------------------
var colArray=[
    [//basic colours for webpage and opaque colours for the buttons
        
        "rgba(255,0,0,1)"/*red*/,"rgba(0,205,0,1)"/*green*/,"rgba(20,67,255,1)"/*blue*/,
        "rgba(255,255,0,1)"/*yellow*/,"rgba(255,145,0,1)"/*orange*/,"rgba(166,7,147,1)"/*purple*/,
        "rgba(255,181,218,1)"/*pink*/,"rgba(108,239,214,1)"/*aqua*/,"rgba(0,0,0,1)"/*black*/,"rgba(255, 166, 129,1)"/*peach*/,
        "rgba(32, 91, 18,1)"/*forest*/
        ],
    [//semi transparent colours for buttons
        "rgba(255,0,0,0.67)"/*red*/, "rgba(0,205,0,0.67)"/*green*/, "rgba(20,67,255,0.67)"/*blue*/, 
        "rgba(255,255,0,0.67)"/*yellow*/,"rgba(255,145,0,0.67)"/*orange*/,"rgba(166,7,147,0.67)"/*purple*/,
        "rgba(255,181,218,0.67)"/*pink*/,"rgba(108,239,214,0.67)"/*aqua*/,"rgba(0,0,0,0.67)"/*black*/,
        "rgba(255, 166, 129,0.67)"/*peach*/,"rgba(32, 91, 18,0.67)"/*forest*/
        ],
    [//transparent colours for buttons
        "rgba(255,0,0,0.33)"/*red*/, "rgba(0,205,0,0.33)"/*green*/, "rgba(20,67,255,0.33)"/*blue*/, 
        "rgba(255,255,0,0.33)"/*yellow*/,"rgba(255,145,0,0.33)"/*orange*/,"rgba(166,7,147,0.33)"/*purple*/,
        "rgba(255,181,218,0.33)"/*pink*/,"rgba(108,239,214,0.33)"/*aqua*/,"rgba(0,0,0,0.33)"/*black*/,
        "rgba(255, 166, 129,0.33)"/*peach*/,"rgba(32, 91, 18,0.33)"/*forest*/
        ],
    [//other colours 
        "rgba(238, 247, 255,1)"/*drawspace colour*/,  "rgba(153,153,153,1)"/* grey */, "rgba(0,0,0,1)"/* black */
        ]
    ]