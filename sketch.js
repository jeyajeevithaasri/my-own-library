var movingrect,fixedrect;
var car,wall;
var car2;

function setup() {
  createCanvas(1000,600);

  movingrect = createSprite(400, 200, 50, 80);
  movingrect.shapeColor = "blue";
  fixedrect = createSprite(200,200,80,50);
  fixedrect.shapeColor = "blue";
  car = createSprite(90,300,80,30);
  wall = createSprite(920,300,20,105);
  car.shapeColor = "pink";
  wall.shapeColor = "green";
  car.velocityX = 8;
  car2 = createSprite(920,20,105,20);
  car2.shapeColor = "yellow";
  car2.velocityY = 8;

}

function draw() {

  background("grey");  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  console.log(movingrect.y-fixedrect.y);

 if( isTouching(car,wall)){
  car.shapeColor = "red";
 // car.velocityX = 0;
 }
  BounceOff(car,wall);
  BounceOff(car2,wall);
  drawSprites();

}


