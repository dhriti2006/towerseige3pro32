const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var Score=0;

function preload()
{
  polygon_img=loadImage("polygon.png");
  gettime();
  nightImage=loadImage("bg2.jpg");
  dayImage=loadImage("bg.png")
  bgImage=loadImage("bg.png")
}

function setup() 
{
  createCanvas(1200,400);

  

 

  engine = Engine.create();
  world = engine.world;

  ground1= new Ground(600,380,1200,20);
  ground2 = new Ground(600,380,1200,20);
  platform1=new Stand(400,250,200,10);
  platform2=new  Stand(620,200,200,10);
  platform3=new Stand(850,170,200,10);
  platform4=new  Stand(1050,280,200,10);
  
  box1 = new Box(465,230,30,30);
  box2 = new Box(435,230,30,30); 
  box3 = new Box(405,230,30,30);
  box4 = new Box(375,230,30,30);
  box5 = new Box(345,230,30,30);
  
  box6 = new Box(358,200,30,30);
  box7 = new Box(388,200,30,30);
  box8 = new Box(418,200,30,30);
  box9 = new Box(448,200,30,30);

  box10 = new Box(433,170,30,30);
  box11 = new Box(403,170,30,30);
  box12 = new Box(373,170,30,30);
push()
fill("black")
  box13 = new Box(385,140,30,30);
  box14 = new Box(415,140,30,30);

  box15 = new Box(401,110,30,30);
pop()

  box16 = new Box(650,180,30,30);
  box17 = new Box(620,180,30,30);
  box18 = new Box(590,180,30,30);

    box19 = new Box(606,150,30,30);
    box20= new Box(636,150,30,30);

    box21 = new Box(623,120,30,30);


    box22 = new Box(880,150,30,30);
    box23 = new Box(850,150,30,30);
    box24 = new Box(820,150,30,30);

    box25 = new Box(820,120,30,30);
    box26 = new Box(850,120,30,30);
    box27 = new Box(880,120,30,30);


    box28 = new Box(1085,260,30,30);
    box29 = new Box(1055,260,30,30);
    box30 = new Box(1025,260,30,30);

    box31 = new Box(1085,230,30,30);
    box32 = new Box(1055,230,30,30);
    box33 = new Box(1025,230,30,30);

    box34 = new Box(1085,200,30,30);
    box35 = new Box(1055,200,30,30);
    box36 = new Box(1025,200,30,30);
 

  

  //ball holder with slings
  ball = Bodies.circle(50,200,25,{density:0.4});
  World.add(world,ball);

  slingShot = new Slingshot(ball,{x:100,y:200});

  var render = Render.create({ 
    element: document.body, 
    engine: engine,
     options: 
     {
        width: 1300, 
     height: 700, 
     wireframes: false 
     }
      }); 
     Render.run(render);

}


function draw()
{
  background(bgImage); 
 
 
  Engine.update(engine);

  textSize(20);
  fill("purple");

  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  text("PRESS SPACE BAR TO RESTART!",100,60);

  text("score:"+ Score,1000,50)


  

 
  strokeWeight(2);
  stroke(15);

  ground1.display();
  ground2.display();
    platform1.display();
    
    platform2.display();
    platform3.display();
    platform4.display();

    strokeWeight(2);
    stroke("pink")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
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
    box27.display();


    box28.display();
    box29.display();
    box30.display();

    box31.display();
    box32.display();
    box33.display();

    box34.display();
    box35.display();
    box36.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();
    box35.score();
    box36.score();
 
    

 

 
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,50,50);
  slingShot.display();

}
function mouseDragged()
{
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(ball,{x:50,y:200});
    slingShot.attach(ball);

  }
}

async function gettime(){
  var myapi=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var myJSONapi=await myapi.json();
  var myDatetine=myJSONapi.datetime;
  var myHour=myDatetine.slice(11,13)
  console.log(myHour);
  if(myHour>=6&&myHour<=18){
  bgImage=loadImage("bg.png")
  
  

  }
  else{
  bgImage=loadImage("bg2.jpg")
  }
  
  
}



