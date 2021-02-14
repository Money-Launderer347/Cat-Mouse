var garden, gardenImg;

var cat, catImg;

var mouse, mouseImg;
function preload() {
    gardenImg = loadImage("garden.png");
    cat = loadImage("cat1.png");
    mouse = loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(800,600,100,30);

    mouse = createSprite(200,600,60,20);

}

function draw() {

    background(255);
    
    keyPressed();

    text(mouseX + ',' + mouseY, 10, 45);
        
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");

    }
}
