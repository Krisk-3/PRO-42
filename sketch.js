var back_img;
var iss,craft_img;
var spacecraft,craft_img2,craft_img3,craft_img4,craft_img5;
var hasDocked  = false

function setup() {
  createCanvas(1200,800);
  spacecraft = createSprite(800, 759 , 50, 50);
  spacecraft.addImage(craft_img2);
  spacecraft.scale = 0.2;


  iss = createSprite(400, 200, 50, 50);
  iss.addImage(craft_img);
}
function preload(){
  back_img = loadImage("Docking-undocking/spacebg.jpg");
  craft_img = loadImage("Docking-undocking/iss.png");
  craft_img2 = loadImage("Docking-undocking/spacecraft1.png");
  craft_img3 = loadImage("Docking-undocking/spacecraft4.png");
  craft_img4 = loadImage("Docking-undocking/spacecraft3.png");
  craft_img5 = loadImage("Docking-undocking/spacecraft2.png");
}

function draw() {
  background(back_img);
  text(mouseX + "," + mouseY, mouseX, mouseY)
    

  if(hasDocked === false){

    if (keyCode === RIGHT_ARROW){
      spacecraft.addImage(craft_img4)
      spacecraft.x = spacecraft.x + 2;
    }
  if (keyCode === LEFT_ARROW){
    spacecraft.addImage(craft_img3)
    spacecraft.x = spacecraft.x -2;
}
  if (keyCode === UP_ARROW){
  spacecraft.addImage(craft_img5)
  spacecraft.y= spacecraft.y-2
}
if (keyCode === DOWN_ARROW){
  spacecraft.addImage(craft_img5)
  spacecraft.x = spacecraft.x +0;
  spacecraft.y= spacecraft.y +0;
}
  }
  
  if (spacecraft.x <= 356 && spacecraft.y <=294) {
      hasDocked = true
      fill("cyan")
      stroke ("cyan")
      textSize (23)
      text("Docking successfull !",400,500)
    }

  drawSprites();
}