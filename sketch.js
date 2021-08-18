var e;


function preload(){
  eImg = loadImage("0.png");
}


function setup() {
  createCanvas(400, 400);
  
  e = createSprite(200, 200);
  e.addImage(eImg);
  
}

function draw() {
  background("lightgreen");
}








