
let Bigbesty;

function preload() {
Bigbesty =loadFont('assets/Bigbesty.ttf');
  
}



function setup (){
createCanvas (600,600);
}

function draw (){
background(2,0,255);
fill(255);
textFont(Bigbesty);
textSize(48);
text("Lorem ipsum dolor sit amet", 300, 300,300,300);
stroke(255);
textAlign(RIGHT, BOTTOM); 

}