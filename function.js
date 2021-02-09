function spawnCar(){
    car = createSprite(200,550,50,50);
    var rand = Math.round(random(1,12));
    switch(rand){
      case 1: car.addImage(car1);
      car.scale = 0.8;
      break;
      case 2: car.addImage(car2);
      car.scale = 0.75;
      break;
      case 3: car.addImage(car3);
      car.scale = 0.6;
      break;
      case 4: car.addImage(car4);
      car.scale = 0.8;
      break;
      case 5: car.addImage(car5);
      car.scale = 0.75;
      break;
      case 6: car.addImage(car6);
      car.scale = 0.4;
      break;
      case 7: car.addImage(car7);
      car.scale = 0.6;
      break;
      case 8: car.addImage(car8);
      car.scale = 0.9;
      break;
      case 9: car.addImage(car9);
      car.scale = 0.7;
      break;
      case 10: car.addImage(car10);
      car.scale = 0.7;
      break;
      case 11: car.addImage(car11);
      car.scale = 0.35;
      break;
      case 12: car.addImage(car12);
      car.scale = 1;
      break;
      default: break;
    }
    
}

function spawnObstacles() {
      if(frameCount % 500 === 0){
          var obstacle = createSprite(1600,570,20,20);
          obstacle.velocityX = -7;
          var rand = Math.round(random(1,2));
          switch(rand){
              case 1: obstacle.addImage(obstacle1);
              obstacle.scale = 0.5;
              break;
              case 2: obstacle.addImage(obstacle2);
              obstacle.y = 600;
              obstacle.scale = 0.3;
              break;
              default: break;
          }
          obstacle.lifetime = 220;
          obstacleGroup.add(obstacle);
      }
}

function spawnCoins(){
    if(frameCount % 80 === 0){
        var coin = createSprite(1600,500,20,20);
        coin.y = Math.round(random(250,500));
        coin.addImage(coinImage);
        coin.scale = 0.1;
        coin.velocityX = -7;
        coin.lifetime = 220;
        coinGroup.add(coin);
    }
}

function spawnFuel(){
    if(frameCount % 350 === 0){
        var fuel = createSprite(1600,500,20,20);
        fuel.y = Math.round(random(250,500));
        fuel.addImage(fuelImage);
        fuel.scale = 0.2;
        fuel.velocityX = -7;
        fuel.lifetime = 220;
        fuelGroup.add(fuel);
    }
}