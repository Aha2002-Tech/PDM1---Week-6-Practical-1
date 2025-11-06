
let x = frameCount % 100;
let Q; 

function preload() {
 Q= loadFont("assets/Q-Regular.ttf");

}
function setup(){
createCanvas (600,600);
frameRate(30);

  textSize(30);
  textAlign(CENTER, CENTER);
  describe('green background');
}

function draw (){

background(0,0,255);
text("lorem ipsum ", 300,300,300,300);
fill(255);
STROKE(255);
textFont(Q);
textSize(50);

if (mouseIsPressed === true) {
    frameRate(10);
  } else {
    frameRate(60);
  }
  {
  circle(x, 50, 20);
}

}

