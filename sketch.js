var PLAY;
var END;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {


  
monkey =createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground =createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  

  obstacleGroup = new Group();
  FoodGroup = new Group();
  
}


function draw() {

background(225);


 
  
if(ground.x<0){
 ground.x=ground.width/2; 
} 
  
if(keyDown("space")){
  monkey.velocityY=-13;
}
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  
  spawnBananas();
  spawnObstacles();
 
  if(monkey.isTouching(obstacleGroup)){
     obstacleGroup.setLifetimeEach(-1);
     FoodGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);   
  }
  
  
drawSprites();  
}

function spawnBananas() {
    if (frameCount % 80 === 0){
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    
    banana.velocityX = -3;
    banana.scale = 0.07;
  
    banana.lifetime = -1;
    
    FoodGroup.add(banana);
    }
 }


function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,310,900,10);
   
    obstacle.addImage(obstacleImage);
    obstacle.velocity.x = -6;    
    obstacle.scale = 0.2;
    obstacle.lifetime = -1;
    
    obstacleGroup.add(obstacle);
   
 }
}




