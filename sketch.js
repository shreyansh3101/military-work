var bullet;
var wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
bullet= createSprite(400, 200, 50, 50);
 wall=createSprite(1500, 200, thickness, height/2)
 wall.shapeColor=(80,80,80)
speed=random(55,90) 
weight=random(400,1500)
thickness=random(22,83)
bullet.velocityX=speed;

}

function draw() {
  background(225,225,225);
  if (collided(bullet,wall)){

bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if (damage>10){

wall.shapeColor=color(225,0,0)

}

if (damage<10){

wall.shapeColor=color(0,225,0)

}
  }
  



  drawSprites();
}

function collided(lBullet,lWall){

bulletRightEdge=lBullet.x;
wallLefftEdge=wall.x
if (bulletRightEdge>=wallLefftEdge){

return  true;

}
return false;
}

