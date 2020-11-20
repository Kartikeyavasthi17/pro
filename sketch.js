const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground3;
var ground1;

var ground;
var ball;
var shot;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10;
var box11,box12,box13;

var box14,box15,box16,box17,box18,box19,box20;

var box21,box22,box23,box24,box25;

var box26;

function setup() {

  createCanvas(1500,650);

  engine = Engine.create();
  world = engine.world;

  ground =new Ground(820,550,500,20);
  ground1 =new Ground(750,640,1500,50);
  ground3 =new Ground(1200,400,400,20);

  box1 =new Stone(680,510,60,60);
  box2 =new Stone(740,510,60,60);
  box3 =new Stone(800,510,60,60);
  box4 =new Stone(860,510,60,60);
  box5 =new Stone(920,510,60,60);
  box6 =new Stone(980,510,60,60);

  box7 =new Stone(740,300,60,60);
  box8 =new Stone(800,300,60,60);
  box9 =new Stone(860,300,60,60);
  box10 =new Stone(920,300,60,60);

  box11= new Stone(800,200,60,60);
  box12= new Stone(860,200,60,60);

  box13 =new Stone(830,100,60,60);

  //ground3 =new Ground(1200,400,400,20);
  //box1 =new Stone(680,400,60,60);
 // ground1 =new Ground(750,640,1500,50);

  box14 =new Stone(1030,260,60,60);
  box15 =new Stone(1090,260,60,60);
  box16 =new Stone(1150,260,60,60);
  box17 =new Stone(1210,260,60,60);
  box18 =new Stone(1270,260,60,60);
  box19 =new Stone(1330,260,60,60);

  box20 =new Stone(1090,160,60,60);
  box21 =new Stone(1150,160,60,60);
  box22 =new Stone(1210,160,60,60);
  box23 =new Stone(1270,160,60,60);

  box24 =new Stone(1150,60,60,60);
  box25 =new Stone(1210,60,60,60);

  box26 =new Stone(1180,0,60,60);

  ball =new stone(350,530,50);

  shot =new SlingShot(ball.body,{x:350,y:430});


  Engine.run(engine);
}

function draw() {
  background(0,0,0); 
  
  Engine.update(engine);
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();

  box13.display();

  ball.display();

  shot.display();

  ground.display();
  ground1.display();
  ground3.display();

    textSize(25);
  text("DRAG THE BALL TO DESTORY THE BLOCKS",600,100);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY!!",100,600);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
  shot.fly();
  }

  function keyPressed()
{

if(keyCode === 32)
{
  Matter.Body.setPosition(ball.body,{x:350,y:430});
  shot.attach(ball.body);
}
}