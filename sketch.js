
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bg;
var BackgroundImg;
var score=0;
function preload()
{
	getBackgroundImg()
}

function setup() {
	createCanvas(1300,650);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


//{	
	
	dragger = new Polygon(160,300,10)
	sling = new Launcher(dragger.body,{x:160,y:300})

	place1 = new Ground(420,400,300,10)
	place2 = new Ground(760,350,300,10)
	place3 = new Ground(1120,400,300,10)
    ground = new Ground(700,640,1500,40)
    


	b1 = new Box(300,370,40,40)
	b2 = new Box(340,370,40,40)
	b3 = new Box(380,370,40,40)
	b4 = new Box(420,370,40,40)
	b5 = new Box(460,370,40,40)
	b6 = new Box(500,370,40,40)
	b7 = new Box(540,370,40,40)
//} 
//{
	b8= new Box2(340,340,40,40)
	b9 = new Box2(380,340,40,40)
	b10 = new Box2(420,340,40,40)
	b11 = new Box2(460,340,40,40)
	b12 = new Box2(500,340,40,40)
//}
//{
	b13 = new Box3(380,310,40,40)
	b14 = new Box3(420,310,40,40)
	b15 = new Box3(460,310,40,40)
//}
//{
	b16 = new Box4(420,280,40,40)

//}
    bb1 = new Box(1000,360,40,40)
	bb2 = new Box(1040,360,40,40)
	bb3 = new Box(1080,360,40,40)
	bb4 = new Box(1120,360,40,40)
	bb5 = new Box(1160,360,40,40)
	bb6 = new Box(1200,360,40,40)
	bb7 = new Box(1240,360,40,40)
//} 
//{
	bb8= new Box2(1040,310,40,40)
	bb9 = new Box2(1080,310,40,40)
	bb10 = new Box2(1120,310,40,40)
	bb11 = new Box2(1160,310,40,40)
	bb12 = new Box2(1200,310,40,40)
//}
//{
	bb13 = new Box3(1080,200,40,40)
	bb14 = new Box3(1120,200,40,40)
	bb15 = new Box3(1160,200,40,40)
//}
//{
	bb16 = new Box4(1120,150,40,40)

//}
    bbb1 = new Box(1000,340,40,40)
	bbb2 = new Box(1040,340,40,40)
	bbb3 = new Box(1080,340,40,40)
	bbb4 = new Box(1120,340,40,40)
	bbb5 = new Box(1160,340,40,40)
	bbb6 = new Box(1200,340,40,40)
	bbb7 = new Box(1240,340,40,40)
//} 
//{
	bbb8= new Box2(1040,280,40,40)
	bbb9 = new Box2(1080,280,40,40)
	bbb10 = new Box2(1120,280,40,40)
	bbb11 = new Box2(1160,280,40,40)
	bbb12 = new Box2(1200,280,40,40)
//}
//{
	bbb13 = new Box3(1080,230,40,40)
	bbb14 = new Box3(1120,230,40,40)
	bbb15 = new Box3(1160,230,40,40)
//}
//{
	bbb16 = new Box4(1120,180,40,40)

//}
bbbb1 = new Box(640,330,40,40)
bbbb2 = new Box(680,330,40,40)
bbbb3 = new Box(720,330,40,40)
bbbb4 = new Box(760,330,40,40)
bbbb5 = new Box(800,330,40,40)
bbbb6 = new Box(840,330,40,40)
bbbb7 = new Box(880,330,40,40)
//} 
//{
bbbb8= new Box2(680,300,40,40)
bbbb9 = new Box2(720,300,40,40)
bbbb10 = new Box2(760,300,40,40)
bbbb11 = new Box2(800,300,40,40)
bbbb12 = new Box2(840,300,40,40)
//}
//{
bbbb13 = new Box3(720,270,40,40)
bbbb14 = new Box3(760,270,40,40)
bbbb15 = new Box3(800,270,40,40)
//}
//{
bbbb16 = new Box4(760,210,40,40)

//}
}
function draw() {
  rectMode(CENTER);

  if(BackgroundImg){
    background(BackgroundImg)
}
dragger.display()

  sling.display()
  ground.display()
  place1.display()
  place2.display()
  place3.display()

  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()  
  b14.display()
  b15.display()
  b16.display()
  bb1.display()
  bb2.display()
  bb3.display()
  bb4.display()
  bb5.display()
  bb6.display()
  bb7.display()
  bb8.display()
  bb9.display()
  bb10.display()
  bb11.display()
  bb12.display()
  bb13.display()  
  bb14.display()
  bb15.display()
  bb16.display()
  bbb1.display()
  bbb2.display()
  bbb3.display()
  bbb4.display()
  bbb5.display()
  bbb6.display()
  bbb7.display()
  bbb8.display()
  bbb9.display()
  bbb10.display()
  bbb11.display()
  bbb12.display()
  bbb13.display()  
  bbb14.display()
  bbb15.display()
  bbb16.display()
  bbbb1.display()
  bbbb2.display()
  bbbb3.display()
  bbbb4.display()
  bbbb5.display()
  bbbb6.display()
  bbbb7.display()
  bbbb8.display()
  bbbb9.display()
  bbbb10.display()
  bbbb11.display()
  bbbb12.display()
  bbbb13.display()  
  bbbb14.display()
  bbbb15.display()
  bbbb16.display()
  b1.score()
  b2.score()
  b3.score()
  b4.score()
  b5.score()
  b6.score()
  b7.score()
  b8.score()
  b9.score()
  b10.score()
  b11.score()
  b12.score()
  b13.score()
  b14.score()
  b15.score()
  b16.score()
  bb1.score()
  bb2.score()
  bb3.score()
  bb4.score()
  bb5.score()
  bb6.score()
  bb7.score()
  bb8.score()
  bb9.score()
  bb10.score()
  bb11.score()
  bb12.score()
  bb13.score()
  bb14.score()
  bb15.score()
  bb16.score()
  bbb1.score()
  bbb2.score()
  bbb3.score()
  bbb4.score()
  bbb5.score()
  bbb6.score()
  bbb7.score()
  bbb8.score()
  bbb9.score()
  bbb10.score()
  bbb11.score()
  bbb12.score()
  bbb13.score()
  bbb14.score()
  bbb15.score()
  bbb16.score()
  bbbb1.score()
  bbbb2.score()
  bbbb3.score()
  bbbb4.score()
  bbbb5.score()
  bbbb6.score()
  bbbb7.score()
  bbbb8.score()
  bbbb9.score()
  bbbb10.score()
  bbbb11.score()
  bbbb12.score()
  bbbb13.score()  
  bbbb14.score()
  bbbb15.score()
  bbbb16.score()
  textSize(30)
  fill("darkblue")
  text("Drag the circular body to hit the blocks",400,50)
  text("Press 'SPACE KEY' to get a second chance",400,500)
  text("SCORE="+score,200,200)
  if(score===720){
      textSize(40)
      text("YOU WON THE GAME",630,300)
  }
}

function mouseDragged(){
    Matter.Body.setPosition(dragger.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
sling.fly()
}
function keyPressed(){
    if(keyCode===32)
{    Matter.Body.setPosition(dragger.body,{x:160,y:300});
	sling.attach(dragger.body)}
}
 async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var jsonresponse = await response.json()
    var datetime =   jsonresponse.datetime
    var hour = datetime.slice(11,13)
    console.log(hour)
  text(hour,200,100)
  if(hour>=06&&hour<=19){
  bg="bg1.png"
}
else{
 bg="bg2.jpg"
}
BackgroundImg=loadImage(bg)
}
