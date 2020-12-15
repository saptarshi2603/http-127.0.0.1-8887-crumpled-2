
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
 rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject=new Paper(200,49,70)
ground = new Ground(600,500,1200,20)
basket1= new Basket(600,390,20,200)
basket2=new Basket(500,480,200,20)

 basket3=new Basket(400,390,20,200)
}


function draw() {
  Engine.update(engine)
  Engine.run(engine)
  background(0);
  paperObject.display();
  ground.display();
  basket1.display();
  basket2.display()
  basket3.display()

 drawSprites();
 
}
function keyPressed() {  
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.position,{x:10,y:-10}); 
 }
 }