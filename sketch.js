
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");

    cat1Img = loadImage("images/cat1.png");
    catAImg = loadAnimation("images/cat2.png", "images/cat3.png")
    cat4Img = loadImage("images/cat4.png");

    mouse1Img = loadImage("images/mouse1.png");
    mouseAImg = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouse4Img = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(width/2, height/2, width, height);
    garden.addImage(gardenImg);
    garden.scale = 1.1;

    //create tom and jerry sprites here
    tom = createSprite(width/2, 650);
    tom.addImage(cat1Img);
    tom.scale = 0.12;

    mouse = createSprite(width/5, 650);
    mouse.addImage(mouse1Img);
    mouse.scale = 0.12;

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -1;
      tom.addAnimation("tomRunning", catAImg);
      tom.changeAnimation("tomRunning");
      mouse.addAnimation("mouseAnimation", mouseAImg);
      mouse.changeAnimation("mouseAnimation")
  }
}