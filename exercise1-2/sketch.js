
let Quin;
let Quin4;
let currentFont ; 

function preload() {
Quin =loadFont("assets/Quin-Regular.ttf");
Quin4=loadFont("assets/Quin4-Regular.ttf");

}


function setup(){



createCanvas (600,600);
currentFont= Quin;
textFont(currentFont);

}
function draw (){

background(0,0,255);

text("lorem ipsum ", 300,300);
fill(255);

textSize(45);



}




function keyPressed() {

if (key === "s") {
  if ( currentFont === Quin) {
    currentFont = Quin4;
    console . log('check the eurro');

  } else { currentFont= Quin 
    console . log('what is the problem');
  }
}

     textFont(currentFont);

}







