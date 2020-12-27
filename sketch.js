
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
 
var newton1,newton2,newton3,newton4,newton5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   newton1=new Newton(400,670,50);
   newton2=new Newton(405,670,50);
   newton3=new Newton(410,670,50);
   newton4=new Newton(415,670,50);
   newton5=new Newton(420,670,50);
   roofTop=new Roof(425,100,250,30);
   rope1=new Chain(newton1.body,roofTop.body);
   rope2=new Chain(newton2.body,roofTop.body);
   rope3=new Chain(newton3.body,roofTop.body);
   rope4=new Chain(newton4.body,roofTop.body);
   rope5=new Chain(newton5.body,roofTop.body);
   //,+newtonDiameter*2,0

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  newton1.display();
  newton2.display();
  newton3.display();
  newton4.display();
  newton5.display();
  roofTop.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



