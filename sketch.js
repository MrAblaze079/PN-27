
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2,  rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground (330,100,260,15);

	bob1 = new Bob (250,400,20);
	bob2 = new Bob (290,400,20);
	bob3 = new Bob (330,400,20);
	bob4 = new Bob (370,400,20);
	bob5 = new Bob (410,400,20);

	rope1 = new Rope(bob1.body, {x:250, y:100});
	rope2 = new Rope(bob2.body, {x:290, y:100});
	rope3 = new Rope(bob3.body, {x:330, y:100});
	rope4 = new Rope(bob4.body, {x:370, y:100});
	rope5 = new Rope(bob5.body, {x:410, y:100});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25,90.22);
  
	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-20,y:-20});
	}

	if(keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:20,y:-20});
	}


}


