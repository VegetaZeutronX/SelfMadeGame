var Brock,BrockImage
var Gun,GunImage
var GroundImage,GROUND
var invisibleground
var gasely,brick,haunter,gyarados
var brickimage
var obstacle

function preload(){
	BrockImage = loadImage("BrockImage.png")
	GunImage = loadImage("GUN.png")
	GroundImage = loadImage("jungleImage.png")

	brickimage = loadImage("brickImage.png")


}

function setup() {
  createCanvas(1200,700);
  GROUND = createSprite(100,100,displayWidth*4,displayHeight*4)
  Brock = createSprite(200, 600, 50, 50); 
  invisibleground = createSprite(100,750,1000,10)
  Gun = createSprite(Brock.x, Brock.y, 50, 50); 
  GROUND.addImage(GroundImage)
  Brock.addImage(BrockImage)
  Gun.addImage(GunImage)
  Gun.scale=0.5
  GROUND.scale =3
  Brock.scale = 1.2
  invisibleground.visible=false
 
}

function draw() {
  background("black");
  GROUND.velocityX=-4
  if(GROUND.x<0){
	  GROUND.x=GROUND.width/2
  }  
  
  if(keyDown("space")){
    Brock.velocityY=-3	   
  }
  
  Brock.velocityY=Brock.velocityY+0.5
  
  Gun.x=Brock.x
  Gun.y=Brock.y
   Brock.collide(invisibleground)
   
   obstacleSpawner();
   
  drawSprites();
}

function obstacleSpawner(){
	if(frameCount%100===0){
		var Obstacle=createSprite(1300,random(150,690),10,10)
		Obstacle.velocityX=-3
		Obstacle.scale = 0.3
		Obstacle.addImage(brickimage)
	}


}