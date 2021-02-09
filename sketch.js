var bgImage, bg;
var ground, groundImage;
var car, car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11, car12;
var obstacle1, obstacle2;
var coinImage, fuelImage;
var obstacleGroup, coinGroup, fuelGroup;
var invisibleground;
var play = 1;
var end = 0;
var gameState = play;

function preload(){
  bgImage = loadImage("sky.jpg");
  groundImage = loadImage("ground2.png");
  car1 = loadImage("car1-removebg-preview.png");
  car2 = loadImage("car2-removebg-preview.png");
  car3 = loadImage("car3-removebg-preview.png");
  car4 = loadImage("car4-removebg-preview.png");
  car5 = loadImage("car5-removebg-preview.png");
  car6 = loadImage("car6-removebg-preview.png");
  car7 = loadImage("car7-removebg-preview.png");
  car8 = loadImage("car8-removebg-preview.png");
  car9 = loadImage("car9-removebg-preview.png");
  car10 = loadImage("car10-removebg-preview.png");
  car11 = loadImage("car11-removebg-preview.png");
  car12 = loadImage("car12-removebg-preview.png");
  obstacle1 = loadImage("obstacle1-removebg-preview.png");
  obstacle2 = loadImage("obstacle2-removebg-preview.png");
  coinImage = loadImage("coin-removebg-preview.png");
  fuelImage = loadImage("fuel_tank-removebg-preview.png");
}
function setup() {
  createCanvas(1500,720);
  bg = createSprite(700,450);
  bg.addImage(bgImage);

  ground = createSprite(1000,700,4000,200);
  ground.addImage(groundImage);
  ground.scale = 3.6;
  ground.velocityX = -7;

  invisibleground = createSprite(90,650,500,20);
  invisibleground.visible = false;

  spawnCar();

  obstacleGroup = createGroup();
  coinGroup = createGroup();
  fuelGroup = createGroup();
}

function draw() {
  background("black");
  
  if(gameState === play){
    if(ground.x < 0){
      ground.x = ground.width/2;
    }
  
    spawnObstacles();
    spawnCoins();
    spawnFuel();
  
    if(keyDown("space") && car.y>= 420){
      car.velocityY = -16;
    }
    car.velocityY = car.velocityY + 0.8;
    car.collide(invisibleground);
    // text for score, car touching the coins and fuel, car touching obstacles, the fuel bar

    if(coinGroup.isTouching(car)){
      coinGroup.destroyEach();
    }

    if(fuelGroup.isTouching(car)){
      fuelGroup.destroyEach();
    }

    if(obstacleGroup.isTouching(car)) {
      gameState = end;
    }
  }
  else if (gameState === end){
     // ground stopping, coins fuels obstacles stopping
     ground.velocityX = 0;
    
     obstacleGroup.setLifetimeEach(-1);
     coinGroup.setLifetimeEach(-1);
     fuelGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     coinGroup.setVelocityXEach(0);
     fuelGroup.setVelocityXEach(0);   
  }
  drawSprites();

  textSize(50);
  text(mouseX + "," + mouseY, mouseX, mouseY);
}