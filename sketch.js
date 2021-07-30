const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup(){
  canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic :true
  }

  var options1 = {
    restitution :1
  }

  ground = Bodies.rectangle(200,380,400,10, options);
  World.add(world, ground);

  ball = Bodies.circle(200,200,25, options1);
  World.add(world,ball);

}

function draw(){
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  fill("orange");
  rect(ground.position.x, ground.position.y, 400,10);

  ellipseMode(RADIUS)
  fill ("blue")
  ellipse(ball.position.x, ball.position.y,25,25);



}


