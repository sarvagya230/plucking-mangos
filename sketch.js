
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,tree_img;
var boy,boy_img;
var fruit,fruit_img;
var stone,stone_img; 
var Ground;
 var chainA;
 var g=0;
var  mango1,mango2,mongo3,mango4,mango5;
var gamestate=0;

function preload()
{
	boy_img=loadImage("boy.png")
	tree_img=loadImage("tree.png")
	fruit_img=loadImage("mango.png")
	stone_img=loadImage("stone.png")	
}

function setup() 
{
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;
	Ground=new ground(400,650,1000,10)
   //	stone = new Stone(100,550,20)
   stone = new Stone(100,550,20,20) 
   chainA=new chain(stone.body,{x:100,y:530})
    mango1=new mango(500,100)
    mango2=new mango(420,200)
    mango3=new mango(550,250)
    mango4=new mango(600,200)
    mango5=new mango(400,300)
    
	//Create the Bodies Here.
	Engine.run(engine);  
}


function draw() 
{
  rectMode(CENTER);
  background(255);
  
  stone.display()
  chainA.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display();
  mango5.display();

  boy_img.resize(200,200)
  tree_img.resize(400,700)

  imageMode(CENTER)
  image(boy_img,150,600)

  imageMode(CENTER) 
  image(tree_img,500,330)       

  fruit_img.resize(50,50)

  imageMode(CENTER)
  image(fruit_img,mango1.body.position.x,mango1.body.position.y)

  imageMode(CENTER)
  image(fruit_img,mango2.body.position.x,mango2.body.position.y)

  imageMode(CENTER)
  image(fruit_img,mango3.body.position.x,mango3.body.position.y)

  imageMode(CENTER)
  image(fruit_img,mango4.body.position.x,mango4.body.position.y)

  imageMode(CENTER)
  image(fruit_img,mango5.body.position.x,mango5.body.position.y)
  
  stone_img.resize(50,50)
  imageMode(CENTER)
  image(stone_img,stone.body.position.x,stone.body.position.y)
  
  Ground.display()

  if (gamestate===0)
  {  textSize(12)
    text("PRESS SPACE BAR FOR SECOND CHANCE",100,-100) 
  }
  
    detectCollision(mango1,stone)
    detectCollision(mango2,stone)
    detectCollision(mango3,stone)
    detectCollision(mango4,stone)
    detectCollision(mango5,stone)

  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY})
	chainA.display()   
}

function mouseReleased()
{
    chainA.fly()
}

function keyPressed()
{
  if(keyCode===32)
  {
      gamestate=1;
      chainA.attach(stone.body)
  }
}

function detectCollision(a,b)
{  
 /*
  if(a.body.position.x-b.body.position.x<=a.radius+b.radius
    && b.body.position.x-a.body.position.x<=a.radius+b.radius
    && a.body.position.y-b.body.position.y<=a.radius+b.radius
    && b.body.position.y-a.body.position.y<=a.radius+b.radius)
 {
     console.log("123");
     Matter.Body.setStatic(a.body,false)
 }
  */  
 
  if(a.body.position.x-b.body.position.x<=a.width/2+b.width/2
    && b.body.position.x-a.body.position.x<=a.width/2+b.width/2
    && a.body.position.y-b.body.position.y<=a.height/2+b.height/2
    && b.body.position.y-a.body.position.y<=a.height/2+b.height/2)
   {
    console.log("123");
    Matter.Body.setStatic(a.body,false)
   }

}





