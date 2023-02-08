var garden,rabbit;
var gardenImg,rabbitImg;
var apple,addImage;
var orangeImg,orangeLeaf;
var redImg,redImage;



function createApple() {
apple = createSprite(random(50, 350),40,10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
}

function createOrange(){
orangeLeaf = createSprite(random(50, 350),40, 10, 10);
orangeLeaf.addImage(orangeImg);
orangeLeaf.scale=0.08
orangeLeaf.velocityY = 3;
orangeLeaf.lifetime = 150;
}

function createRed(){
redImage = createSprite(random(50,350),40,10,10);
redImage.addImage(redImg);
redImage.scale=0.06;
redImage.velocityY = 3;
redImage.lifetime = 150;

}

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}


    var select_srites = Math.random(random(1,3));

  if (frameCout % 80 == 0) {
    if (frameCout == 1) { 
      createApple();
    } else if (select_srites == 2 ){
      createOrange();
    } else {
      createRed();
    }
  }



rabbit.x = World.mouseX;










