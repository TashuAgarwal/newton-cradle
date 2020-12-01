const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof, rope1, rope2, rope3, rope4, rope5;
function setup() {
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 30;
	

	//Create the Bodies Here.

	bob1 = new Bob(200, 500, bobDiameter);
	bob2 = new Bob(260, 500, bobDiameter);
	bob3 = new Bob(320, 500, bobDiameter);
	bob4 = new Bob(380, 500, bobDiameter);
	bob5 = new Bob(440, 500, bobDiameter);
	
	roof = new Roof(width/2, height/4, 250, 15);

	rope1 = new Rope(bob1.body,roof.body,-105,0);
	rope2 = new Rope(bob2.body,roof.body,-55,0);
	rope3 = new Rope(bob3.body,roof.body,0,0); 
 	rope4 = new Rope(bob4.body,roof.body,55,0); 
	rope5 = new Rope(bob5.body,roof.body,105,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(40);
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();
  drawSprites();
}

function mouseDragged() { 
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY}); 
}
	




