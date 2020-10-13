
var fixedRect,movingRect;
var f, m;

function setup() {
  createCanvas(1200,600);
  fixedRect=createSprite(600,300, 50, 50);
  movingRect=createSprite(800,200, 80, 30);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  f=createSprite(400,100, 50, 50);
  m=createSprite(400,400, 80, 30);
  m.velocityY = -5;
  f.velocityY = 5;

}

function draw() {
  background(0,0,0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if (movingRect.x-fixedRect.x < (movingRect.width/2+fixedRect.width/2)&& fixedRect.x-movingRect.x < (movingRect.width/2+fixedRect.width/2)&&movingRect.y-fixedRect.y < (movingRect.height/2+fixedRect.height/2)&& fixedRect.y-movingRect.y < (movingRect.height/2+fixedRect.height/2) ){


  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

}else {

  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";


}

if (m.x-f.x < (m.width/2+f.width/2)&& f.x-m.x < (m.width/2+f.width/2)){

  m.velocityX = m.velocityX * -1;
  f.velocityX = f.velocityX * -1;

}

if (m.y-f.y < (m.height/2+f.height/2)&& f.y-m.y < (m.height/2+f.height/2)){

  m.velocityY = m.velocityY * -1;
  f.velocityY = f.velocityY * -1;

}





  drawSprites();
}