
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin,ground;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,20);

	dustbin = new Dustbin(1200,650);

    ground = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  dustbin.display();
  ground.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	}
}


