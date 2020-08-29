const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];

var dHeight = 300;

var score = 0;
var turn = 0;
var Particle;
var play,end;
var gamestate = "play";

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  Ground = new ground();

  for(var k = 0; k <= width; k = k+80){
    divisions.push(new division(k, height-dHeight/2-15, 10, dHeight));
  }
  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 100))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,200))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,300))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,400))
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  if(gamestate != "end"){
    textSize(20);
    fill("white");
    text("Score: " + score, 675,40);
    if (Particle != null) {
      Particle.display();
      if(Particle.body.position.y > 760 && Particle.body.position.x > 0 && Particle.body.position.x < 800){
        if(Particle.body.position.x <= 240){
          score += 500;
          Particle = null;
        }
        else if(Particle.body.position.x < 600){
          score += 100;
          Particle = null;
        }
        else{
          score += 200;
          Particle = null;
        }
        turn++;
      }
    }
    if(turn >= 5) {
      gamestate = "end";
    }
  }else{
    textSize(60);
    fill("red")
    text("GAME OVER",65,250);
    textSize(30);
    fill("white");
    text("Your Score: " + score, 130,350);
  }

  

  stroke(255);
  fill(255);
  textSize(25);
  text("Score: "+score,20,50);
  text("500",15,525);
  text("500",95,525);
  text("500",175,525);

  text("100",255,525);
  text("100",335,525);
  text("100",415,525);
  text("100",495,525);
  
  text("200",575,525);
  text("200",655,525);
  text("200",735,525);
  text("Turns: " + turn,350,50);
  strokeWeight(3);

  /*if(frameCount % 30 === 0){
    Particle = new particle(random(width/2-70,width/2+70), 10,10);
    particles.push(Particle);
  }*/

  Ground.display();

  if(Particle) {
    Particle.display();
  }
  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
 }
 noStroke();
  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

  drawSprites();
}

function mouseReleased() {
  if(gamestate !== "end") {
    Particle = new particle(mouseX,10,10,10);
  }
}