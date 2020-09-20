var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22, 83)

  bullet = createSprite(50, 200, 40, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = rgb(80, 80, 80)
  
  damage = (speed * speed * weight * 0.5) / (thickness * thickness * thickness);

  console.log(speed);
  console.log(weight);
  console.log(damage);
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
    if(damage < 10){
      wall.shapeColor = "green";
    }
    else{
      wall.shapeColor = "red";
    }
  }
  bullet.collide(wall);
  drawSprites();
}

function hasCollided(bullet1, wall1){

  bulletRightEdge = bullet1.width/2 +bullet1.x;
  wallLeftEdge = wall1.x-wall.width/2;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}
