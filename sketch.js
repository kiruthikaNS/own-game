var gameState = "story" ;
var backgr , backgrImage , backgr2 ,backgrImage2
var mario , marioImage ,  hog , hogImage 
var wildtort , wildtortImage , wiplant , wiplantImage
var goomba , goombaImage , flygomba , flygombaImage
var obstaceImage , obstaceImage2
var invisiblegr , invisiblegrImage
var coin1 , coin2 , coin1Image , coin2Image
var soniclogo ,  soniclogoImage
var droneImage , eggdroneImage
var restart ,restartImage , play , playImage , gameover , gameoverImage ;
var controls ,controlsImage ;
var background_sound ;
var bombImage ;
var AtomsGroup , SoniccoinsGroup ;
var sonicCoinImage ;
var score ;
var chances ;





function preload(){
backgrImage = loadImage("clouds.gif") ;
backgrImage2 = loadImage("city.jpg") ;
backgrImage3 = loadImage("spacefree.gif") ;
backgrImage4 = loadImage("Nightmoon.gif") ;  
hogImage = loadImage("hedgehog.gif") ;
invisiblegrImage = loadImage("sky.png") ;
coin1Image = loadImage("coin1.gif") ;
coin2Image = loadImage("coin2.gif") ;  
wiplantImage = loadImage("wildplant.png") ;
wildtortImage = loadImage("wildtortoise.png") ;
goombaImage = loadImage("goomba.png")  
flygombaImage = loadImage("flyinggoomba.png") ;
restartImage = loadImage("reset.png") ;
playImage = loadImage("play.png") ;
gameoverImage = loadImage("gameover.png") ;
controlsImage = loadImage("controls.png") ;
soniclogoImage = loadImage("sonic.png") ;
sonicCoinImage = loadImage("sonicCoin.png") ;
bombImage = loadImage("bomb.png") ;
hedgehogImage = loadImage("hedgehog.png") ;
background_sound = loadSound("helping.mp3") ;
eggdroneImage = loadImage("eggdrone.png") ;
droneImage = loadImage("drone.png") ;
  
  
}

function setup() {
createCanvas(800 , 600) ;

  
background_sound.loop() ;
background_sound.setVolume(0.005) ;
  
backgr = createSprite(600 , 300) ; 
backgr.addImage(backgrImage) ;

hog = createSprite(100 , 480 , 30 , 30 ) ;  
hog.addImage(hogImage) ;
hog.scale = 0.23 ;

invisiblegr = createSprite(300 , 840 , 100 , 100) ;
invisiblegr.addImage(invisiblegrImage) ;
invisiblegr.scale = 1 ;
  
soniclogo = createSprite(400 , 220 , 50 , 50) ;
soniclogo.addImage(soniclogoImage) ;
soniclogo.scale = 0.7 ; 
soniclogo.visible = false ;
  
restart = createSprite(400 , 350 , 50 , 50) ;
restart.addImage(restartImage) ;
restart.scale = 0.15 ;
restart.visible = false ;
  
gameover = createSprite(400 , 200 , 50 , 50) ;
gameover.addImage(gameoverImage) ;
gameover.scale = 0.15 ;
gameover.visible = false ;
    
play = createSprite(400 , 550 , 50 , 50) ;
play.addImage(playImage) ;
play.scale = 0.2 ;
play.visible = false ;

controls = createSprite(400 , 470 , 50 , 50) ;
controls.addImage(controlsImage) ;
controls.scale = 0.3 ;
controls.visible = false ;
 
hog.debug = false ;
hog.setCollider("rectangle" , 0 , 0 , hog.width , hog.height) ;
  
score = 0 ;
  
chances = 3 ;
  
coinsGroup = new Group() ;
obstaclesGroup = new Group() ;
goombaGroup = new Group() ;
AtomsGroup = new Group() ;
SoniccoinsGroup = new Group() ;
  
}

function draw() {
background("lightblue") ;
 
 hog.collide(invisiblegr) ;   
  
  
 if(gameState ===  "story"){
   story() ;
   
   if(mousePressedOver(play)){
     gameState = "play" ;    
   }
   
   if(mousePressedOver(controls)){
     gameState = "control" ;
     
   }
 } 
  
  if(gameState === "control"){
    control() ;
    
    backgr.visible = false ;
  }
  
if(gameState === "play"){
   
    backgr.visible = true;
    backgr.velocityX = -(5+3 * score/20) ;
    soniclogo.visible = false ;
    controls.visible = false ;
    play.visible = false;
    control.visible = false;
    hog.visible = true;
    
    invisiblegr.visible = true;
    restart.visible = false;
    gameover.visible = false;

  
    
  if(score <= 10){
    backgr.addImage(backgrImage) 
    backgr.scale = 2.7 ;    
    invisiblegr.visible = true ;    
  }else if(score > 12  &&  score <= 20){
    backgr.addImage(backgrImage2) 
    backgr.scale = 0.7 ;
    invisiblegr.visible = false ;           
  }else if(score > 22  &&  score <= 30){
    backgr.addImage(backgrImage3) ;
    backgr.scale = 1.8 ;
    invisiblegr.visible = true ;        
  }else if(score > 32  &&  score <= 40){
    backgr.addImage(backgrImage4) ;
    backgr.scale = 1.8 ;          
  }else if(score > 42  &&  score <= 1000){
    backgr.addImage(backgrImage) 
    backgr.scale = 2.7 ;      
  }
  
  
   
 if(backgr.x < 80){
    backgr.x = backgr.width/2 ;   
    }
    
  invisiblegr.velocityX = -(5+3 * score/20) ;
  
 if(invisiblegr.x < 20){
    invisiblegr.x = invisiblegr.width/2 ;   
    }  
  
  
if(keyDown("space") &&  hog.y >= 400){
  hog.velocityY = -20 ;
} 
   hog.velocityY = hog.velocityY +0.8  ;
  
  
 if(hog.isTouching(coinsGroup)){
    coinsGroup.destroyEach() ;
   
    score = score + 2 ;
 }
  
  
 if(goombaGroup.isTouching(invisiblegr)){
    goombaGroup.destroyEach() ;
 }  
    
  
 if(hog.isTouching(obstaclesGroup)){
    obstaclesGroup.destroyEach() ;  
   
    chances = chances - 1 ;
 } 
   
  
 if(hog.isTouching(goombaGroup)){
    goombaGroup.destroyEach() ;
   
    chances = chances - 1 ;
 }
  
  
 if(hog.isTouching(AtomsGroup)){
    AtomsGroup.destroyEach() ;
   
    chances = chances - 1 ;     
 }
  
  
 if(hog.isTouching(SoniccoinsGroup)){
   chances = chances+1 ;
   
   SoniccoinsGroup.destroyEach() ;
   
 
 }
  
 coins() ;
  
 obstacles() ; 
  
 spawnGoomba() ;
  
 sonicCoins() ;
  
 Atoms() ;
} 

if(chances <= 0 ){
  gameState = "end" ;
  
  hog.addImage(hedgehogImage) ;
  
  backgr.velocityX = 0 ;
  invisiblegr.velocityX = 0 ;
  
  hog.velocityY = 0 ;
  
  restart.visible = true ;
  gameover.visible = true ;
  
  obstaclesGroup.setVelocityXEach(0) ;
  coinsGroup.setVelocityXEach(0) ;
  goombaGroup.setVelocityYEach(0) ;
  goombaGroup.setVelocityXEach(0) ;
  AtomsGroup.setVelocityXEach(0) ;
  SoniccoinsGroup.setVelocityEach(0) ;

     
  obstaclesGroup.setLifetimeEach(-1);
  coinsGroup.setLifetimeEach(-1)
  goombaGroup.setLifetimeEach(-1);
  AtomsGroup.setLifetimeEach(-1)
  SoniccoinsGroup.setLifetimeEach(-1);  
  
    
   if (mousePressedOver(restart)) {
     hog.addImage(hogImage) ;
     obstaclesGroup.destroyEach();
     coinsGroup.destroyEach();
     goombaGroup.destroyEach();
     AtomsGroup.destroyEach() ;
     SoniccoinsGroup.destroyEach() ;
     gameState = "play";
     score = 0;
     chances = 3 ;
    } 
  
  
  
}
   
  
drawSprites() ;  
  
    fill("black") ;
    stroke("black") ;
    textSize(20) ;
    text("score:"+score , 550 , 50) ;

    fill("black") ;
    stroke("black") ;
    textSize(20) ;    
    text("lives:"+chances , 150 , 50) ; 
    }

    function story(){
    hog.visible = false ;
    play.visible = true;
    controls.visible = true;
    soniclogo.visible = true ;
    backgr.visible = false;  
    invisiblegr.visible = false ; 
    }

    function control(){
    soniclogo.visible = false ;
    play.visible = false;
    controls.visible = false;
    backgr.visible = false;  
    invisiblegr.visible = false ; 
  
 fill("red") 
 stroke("red")
 textSize(28);
  
 text("Controls", 325, 130);
  
  
 fill("green")
 stroke("green")
 textSize(28);

 text("Press space to jump", 250, 200);
 text("Press play to get started", 230, 270); 
 text("Collect Sonic coins to improve lives", 150, 340); 
 text("Gain more score to see amazing background", 90, 410);
 text("Collect more coins to make the game challenging ", 75, 480); 
 text("Press 'S' to go back", 250, 550);
  
  if (keyDown("s")) {
    gameState = "story";
  }
}




function obstacles(){
if(frameCount  %   330 === 0){
var obstacle = createSprite(500 , 480 , 20 , 20) ;
     r = Math.round(random(1 , 2)) ;
  if(r === 1)
  {
     obstacle.addImage(wildtortImage) ;
     obstacle.scale = 0.09 ;
     obstacle.y = 490 ;
    
  }else if(r === 2)   
  {
    obstacle.addImage(wiplantImage) ; 
    obstacle.scale = 0.05 ;
  }
    
    obstacle.velocityX = -(5+3 * score/20) ;   
    obstacle.lifetime = 200 ;
  
  
    obstacle.debug = false ;
    obstacle.setCollider("rectangle" , 0 , 0 , hog.width , obstacle.height-30) ;
    obstaclesGroup.add(obstacle) ;
  
}

}

function coins(){
 if(frameCount % 120 ===  0){
var coin1 = createSprite(500 ,0 ,20 ,20) ;
       r = Math.round(random(1 , 2)) ;
      if(r === 1)
    {
     coin1.addImage(coin1Image) ;
     coin1.scale = 0.15 ; 
    }
      else
    {
     coin1.addImage(coin2Image) ; 
     coin1.scale = 0.4 ;
    }


    coin1.y = Math.round(random(300 , 500)) ;
   
    coin1.velocityX = -(5+3 * score/20) ;
    coin1.lifetime = 150 ;
   
    coinsGroup.add(coin1) ; 
 } 
  
}


function spawnGoomba(){
  if(frameCount % 274 === 0){
 var goomba = createSprite(600 , 100 , 30 , 30)  ;
      r = Math.round(random(1 ,2)) ;
    if(r === 1)
    {
     goomba.addImage(eggdroneImage) ; 
     goomba.scale = 0.15 ;     
    }else {
     goomba.addImage(droneImage) ; 
     goomba.scale = 0.04 ;
    }

     goomba.velocityX = -(5+2 * score/30) ;
     goomba.velocityY = (6+2 * score/30) ;
     goomba.lifetime = 200 ;
    
     goombaGroup.add(goomba) ;

  }   
}

function sonicCoins(){
if(frameCount % 1039  ===  0){
var sonicCoin = createSprite(500 , Math.round(random(320 , 420)), 20 , 20) ;
    sonicCoin.addImage(sonicCoinImage) ;
    sonicCoin.scale = 0.1 ;
    sonicCoin.velocityX = -(5+3 * score/20) ;
    sonicCoin.lifetime = 150 ; 
  
    SoniccoinsGroup.add(sonicCoin) ;
  }    
}

function Atoms(){
if(frameCount % 467 === 0){
var bomb = createSprite(Math.round(700 ,800) , Math.round(400 , 650) , 20 , 20) ;
    bomb.addImage(bombImage) ;
    bomb.scale = 0.025 ;
    bomb.velocityX = -(7+3 * score/20) ;
    bomb.lifetime = 150 ;     
   
    
    bomb.debug = false ;
    bomb.setCollider("circle" , 0 , 0 , 25) ;
  
  
    AtomsGroup.add(bomb) ;
  } 
}