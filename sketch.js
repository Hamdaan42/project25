
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1 ,box2 , box3 ;
var paper1;
var groundd


	


function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	groundd = new ground(400,700,800,20)

	paper1 = new paper(200,200,50);


	box1=new box (500,680);
  //  box2=new box (400,590,40,150);
	//box3=new box (600,590,40,150);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper1.display();
  box1.display();
  //box2.display();
  //box3.display();
  groundd.display();
  
 
}
function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:70,y:-100})
}	
}



