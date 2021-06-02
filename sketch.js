var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, leafImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){   
  createCanvas(400,400);
    
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  }


function draw() {
  background("white");

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();
  createLeaves();
  drawSprites();
}

function createApples(){
  if(frameCount % 80 == 0){
  apple = createSprite(random(50, 350), 40);
  apple.addImage("apples", appleImg);
  apple.scale = 0.08;
  apple.velocityY = 5;
  apple.lifetime = 40;
  }
  
}

function createLeaves(){
  if(frameCount % 80 == 0){
  leaf = createSprite(random(50, 350), 40);
  leaf.addImage("leaves", leafImg);
  leaf.scale = 0.08;
  leaf.velocityY = 3;
  leaf.lifetime = 70;
  }

}




