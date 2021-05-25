
var gameState = "play"

var hulk;
var hulkStanding, hulkStandingLeft;
var hulkWalking, hulkWalkingLeft;
var hulkSmash, hulkSmashLeft;
var hulkPunch, hulkPunchLeft;
var hulkJump, hulkJumpLeft;

function preload(){

  hulkSmash = loadAnimation("landPollution/hulkSmash1.png","landPollution/hulkSmash2.png","landPollution/hulkSmash3.png",
  "landPollution/hulkSmash4.png","landPollution/hulkSmash5.png");
  hulkSmashLeft = loadAnimation("landPollution/hulkSmashLeft1.png","landPollution/hulkSmashLeft2.png","landPollution/hulkSmashLeft3.png",
  "landPollution/hulkSmashLeft4.png","landPollution/hulkSmashLeft5.png");


  hulkStanding = loadAnimation("landPollution/hulkWalking2.png");
  hulkStandingLeft = loadAnimation("landPollution/hulkWalkingLeft2.png");


  hulkWalking = loadAnimation("landPollution/hulkWalking1.png", "landPollution/hulkWalking2.png");
  hulkWalkingLeft = loadAnimation("landPollution/hulkWalkingLeft1.png", "landPollution/hulkWalkingLeft2.png");


  hulkPunch = loadAnimation("landPollution/hulkPunch1.png", "landPollution/hulkPunch2.png", 
  "landPollution/hulkPunch3.png", "landPollution/hulkPunch4.png");
  hulkPunchLeft = loadAnimation("landPollution/hulkPunchLeft1.png", "landPollution/hulkPunchLeft2.png", 
  "landPollution/hulkPunchLeft3.png", "landPollution/hulkPunchLeft4.png");

  
}
function setup() {
  createCanvas(1400,700);
  hulk = createSprite(400, 200, 50, 50);

  hulk.addAnimation("hulk", hulkStanding);
  hulk.addAnimation("hulkLeft", hulkStandingLeft);

  hulk.addAnimation("hulkWalk", hulkWalking);
  hulk.addAnimation("hulkWalkLeft", hulkWalkingLeft);

  hulk.addAnimation("hulkPunching", hulkPunch);
  hulk.addAnimation("hulkPunchingLeft", hulkPunchLeft);

  hulk.addAnimation("hulkSmash", hulkSmash);
  hulk.addAnimation("hulkSmashLeft", hulkSmashLeft);
  
  hulk.scale = 0.4;
}

function draw() {
  background(0); 
  
  if(gameState === "play"){

//Going Right
 if(keyDown(RIGHT_ARROW)){
    hulk.velocityX = 3;
    hulk.changeAnimation("hulkWalk", hulkWalking);

  }else{
    hulk.velocityX = 0;
    hulk.changeAnimation("hulk", hulkStanding);
    hulk.scale = 0.4;
  }

  //Going Left
  if(keyDown(LEFT_ARROW)){
    hulk.velocityX = - 3;
    hulk.changeAnimation("hulkWalkLeft", hulkWalkingLeft);

  }

  //Punching Right
  if(keyDown("w")){
    hulk.changeAnimation("hulkPunching", hulkPunch);
    hulk.scale = 0.7;
  }

  //Punching Left
  if(keyDown("q")){
    hulk.changeAnimation("hulkPunchingLeft", hulkPunchLeft);
    hulk.scale = 0.7;
  }

  //Smashing Right
  if(keyDown("d")){
    hulk.changeAnimation("hulkSmash", hulkSmash);
    hulk.scale = 0.5;
  }

  //Smashing Left
  if(keyDown("a")){
    hulk.changeAnimation("hulkSmashLeft", hulkSmashLeft);
    hulk.scale = 0.5;
  }

  
  
}
  drawSprites();
  }