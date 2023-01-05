var snapshots = [];
var webcam = null;
var cam = null;
var inc = 0;

let heart;

// -----------------------------------------------------------------------------

function setup() {
  createCanvas(1000, 800);
  background(255);
  
  webcam = createCapture(VIDEO);
  webcam.size(640,480);
  webcam.position(0,0);
  
  heart = loadImage("images/heart.png");
  bao = loadImage("images/Bao.png");
  star = loadImage("images/Star.png");
  
  
  layer = createGraphics(640,480);
 

  
  buttons(); 
  
  
   
  
  
}

// -----------------------------------------------------------------------------


function draw() {

  
 image(layer, 0, 0);


   
   
   
  var w = 80;
  var h = 60;
  var x = 640;
  var y = 50;
  
  
  for (var i = 0; i < snapshots.length; i++) {
  
  image(snapshots[i], x, y, w, h);
  x = x + w;
  if (x > 800) {
    x = 640;
    y = y + h;
    
  }
  






  
  } 
  









  
}
