
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(50,300,50,60);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  //monkey.debug = true;
  
  ground = createSprite(15, 300, 1000, 20);
  ground.velocityX = -3;
 // ground.x = ground.width /2 ;
  
  foodGroup = new Group();
}


function draw() {
  background(255);
  /*stroke("white");
  textSize(20);
  fill("white");
  text("Score"+survivalTime, 400,20);*/
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  
  console.log(monkey.y);
  if(ground.x < 0){
    ground.x = ground.width /2 ;
  }
  if(keyDown("space") && monkey.y > 259){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,350);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -2;
    banana.scale = 0.1
    banana.lifetime = 600;
    
    foodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount % 300 === 0){
  obstacle = createSprite(600,270);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -2;
    obstacle.scale = 0.1;
    obstacle.lifetime = 600;
  }
}




