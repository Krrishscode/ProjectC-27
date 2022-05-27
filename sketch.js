
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pointImg;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];
var bxcnt=0;
var sounds;


function preload() {

  sounds = loadSound("gameClick.mp3");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(width / 2, height / 1.05, width,20, option);
  World.add(world,ground);
  // box1 = new Box(200,100,50,50);


  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  bxcnt += 1
  sounds.play();
  boxes.push(
    
    
    new Box(mouseX, mouseY, 50, 50)
    
    
    
    )
}

function draw() 
{
  background(51);
  rect(ground.position.x,ground.position.y,width,10);
  Engine.update(engine);
  for(var i=0;i<boxes.length;i++) {
  boxes[i].show();}

 push();
  textSize(20)
  stroke("white")
  strokeWeight(1)
  fill("black")
  text("Box count: " + bxcnt, 10, 30)
pop();
}

