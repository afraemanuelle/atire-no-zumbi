var bg,bgImg;
var player, shooterImg,shoorter_shooting;

function preload(){
    shooterImg= loadImage("caçador.png")

    bgImg = loadImage("cemiterio.png")

}

function setup(){
    createCanvas(windowWidth,windowHeight);

    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

player = createSprite(displayWidth-1150, displayHeight-300, 50,50, 50);
player.addImage(shooterImg)
player.scale = 0.3
//player.setCollider("rectangle",0,0,300,300)
}