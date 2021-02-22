

function preload() {
  hotballoon=loadImage("Hot Air Ballon-01.png")
 balloonmove=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}
function setup() {
  createCanvas(1500,600);
  
  ball= createSprite(100,50,30,30)
  ball.addAnimation("moveballoon",balloonmove)
  
  
}

function draw() {
  background(hotballoon);
  
  ball.display();
  if(keyDown(LEFT_ARROW)){
    ball.x=ball.x-10
  }  
  if(keyDown(RIGHT_ARROW)){
    ball.x=ball.x+10
  } 
  if(keyDown(UP_ARROW)){
    ball.y=ball.y-10
  } 
  if(keyDown(DOWN_ARROW)){
    ball.y=ball.y+10
  } 

  drawSprites();
}
