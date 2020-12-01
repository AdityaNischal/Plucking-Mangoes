
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,groundImg,boy,boyImg,tree,treeImg,stone1;

function preload()
{
	groundImg = loadImage("g1.jpg")
	
	boyImg = loadImage("boy.png")

	treeImg = loadImage("tree.png")
}

function setup() {
	createCanvas(1550, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(900,900);
	ground.addImage(groundImg);
	ground.scale="2"

	boy = createSprite(1200,460);
	boy.addImage(boyImg);
	boy.scale="0.4"

	tree = createSprite(300,300)
	tree.addImage(treeImg)
	tree.scale="0.45"



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 

  drawSprites();
 
}



