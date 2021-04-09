
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	SP = new ball(100,400,10);
	G1 = new ground(400,600,800,20);
  D1 = new DL(550,540,20,100);
  D2 = new DL(635,580,150,20);
  D3 = new DL(720,540,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  SP.display();
  G1.display();
  D1.display();
  D2.display();
  D3.display();

  SP.velocityY = SP.velocityY + 0.1;

  keyPressed();
  drawSprites();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(SP.body,SP.body.position,{x:2,y:-2});
  }
}



