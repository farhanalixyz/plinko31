const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var land;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  land=new ground(width/2,height,width,20);

  for (var k=0;k <=width; k=k+80) {
    divisions.push(new division(k,height=divisionHeight/2,10,divisionHeight));
  }
  for (var j=40;j <=width; j=j+50)
  {
    plinkos.push(new plinko(j,75));
  }
  for (var j=15;j <=width-10; j=j+50)
  {
    plinkos.push(new plinko(j,175));
  }
  

}

function draw() {
  background(0);  
  Engine.update(engine);
  land.display();
  for (var i=0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new particles(random(100,700),10,10));
  }
  for (var j=0;j < particles.length; j++)
  {
    particles[j].display();
  }
  for (var k=0;k <divisions.length; k++){
    divisions[k].display();
  }

}