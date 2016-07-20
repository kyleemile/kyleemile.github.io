var player;
var playerImage;
var enemy; 
var enemyImage;
var backgroundImage;
var isGameOver;
function preload(){
  playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
  enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
  backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png")
}
  
function setup () {
    createCanvas(256, 256);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 7.0;
    isGameOver = false;
}
function draw() {
 if (isGameOver) {
    gameOver();
  } else {
  background(backgroundImage);

    if(keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))){
      player.position.x += 3;
    }
    if(keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)){
      player.position.x -= 3;
  }
  if (enemy.position.y > height) {
    enemy.position.y = 0;
    enemy.position.x = random(5, width-5);
  }
   enemy.position.y = enemy.position.y + 6;

  if (enemy.overlap(player)) {
      isGameOver = true;
}

  drawSprites();
    }
}
function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  var t = "game over--you're a piece of shit"
  text(t,40, 100, 140, 160);
}
function mouseClicked() {
  isGameOver = false;
  player.position.x = width/2;
  player.position.y = height-(playerImage.height/2);
  enemy.position.x = width/2;
  enemy.position.y = 0;
}
