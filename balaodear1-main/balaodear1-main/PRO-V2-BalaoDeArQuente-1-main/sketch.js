var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3


function preload(){
bgImg = loadImage("assets/bg.png");
balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");

}

function setup(){

//imagem de plano de fundo
bg = createSprite(165, 485, 1, 1);
bg.addImage("background", bgImg);
bg.scale = 1.3;
//criando canto superior e inferior
bottomGround = createSprite(200, 390, 800, 20);
topGround = createSprite(200, 10, 800, 20);
bottomGround.visible = false;
topGround.visible = false;
balloon = createSprite(100, 200, 20, 50);
balloon.addAnimation("balão", balloonImg);
balloon.scale = 0.2;
      
//criando o balão     




}

function draw() {
  
  background("black");
        
          //fazendo o balão de ar quente pular
          if(keyDown("space")) {
            balloon.velocityY = -6;
          }

          //adicionando gravidade
          balloon .velocityY = balloon.velocityY + 2.0
   
        drawSprites();
              
}
