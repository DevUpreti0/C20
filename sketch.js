var movingrect, fixedrect;





function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 50, 50, 50);
 movingrect.shapeColor="red";
 movingrect.velocityY=5;

 fixedrect=createSprite(400,390,50,50);
 fixedrect.shapeColor="red";
 fixedrect.velocityY=-5;
}

function draw() {
  background(0);  

if(movingrect.y-fixedrect.y===movingrect.height/2+fixedrect.height/2){
movingrect.velocityY=-movingrect.velocityY;
fixedrect.velocityY=-fixedrect.velocityY;
}

  drawSprites();
}