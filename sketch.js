
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;
var survivalTime;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
obstacleImage=loadImage("obstacle.png")
 
}



function setup() {
  monkey=createSprite(60,320,20,20)
  monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1;
  
  ground=createSprite(400,350,900,2);
  ground.velocityX=-4;
bananaGroup= new Group();
  obstacleGroup= new Group();
  score=0;
  survivalTime=0;
}


function draw() {
background("white");
  if(ground.x<0){
  ground.x=ground.width/4; 
  }
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  
  }
   monkey.velocityY=monkey.velocityY+0.8; 
  food();
  obstacles();
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    bananaGroup.setVelocityX=0;
  }
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time:"+survivalTime,220,50)
  
  
  drawSprites();
  
}
function food(){
  if(World.frameCount%80===0){
    banana=createSprite(300,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-5;
    banana.setLifetime=50;
   bananaGroup.add(banana)
  }
}

function obstacles(){
  if(World.frameCount%300===0){
  obstacle=createSprite(400,320,20,20);
   obstacle.addImage(obstacleImage)
    obstacle.scale=0.2;
   obstacle.velocityX=-5;
    obstacle.setLifetime=50;
   obstacleGroup.add(obstacle)
  }
}




