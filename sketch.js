var car, wall, speed, weight, deformation;

function setup() {
  createCanvas(1600,400);
  
  //creating the car and wall
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
  
  //assigning random spped and weight to the car
  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;
}

function draw() {
  background("white");  

  if(wall.x - car.x < (wall.width + car.width)/2){
    car.velocityX = 0;
    deformation = (0.5 * weight * speed * speed)/22500
    if (deformation > 180){
      car.shapeColor = color(255, 0, 0);
     text("Person was hurt; red", 100, 100);
    }

    if (deformation <= 180 && deformation >= 100){
      car.shapeColor = color(230, 230, 0);
      text("Person was hurt; yellow", 100, 100);
    }

    if (deformation < 100){
      car.shapeColor = color(0, 255, 0);
      text("Person was fine; green", 100, 100);
    }
  }

  drawSprites();
}