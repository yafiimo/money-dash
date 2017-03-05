
var canvas = document.getElementById('game_screen');
var context = canvas.getContext('2d');

// var level1 = [[0, 375, 350, 20], [450, 375, 350, 20], [100, 250, 600, 20], [450, 125, 350, 20]]
// var levels = [level1, level2, level3, level4, level5];
var player1 = new Sprite('player1.png', 40, 40, 10, 460, 0, 0, 20, 0.1);
var player2 = new Sprite('player2.png', 40, 40, 750, 460, 0, 0, 20, 0.1);
// var players = [player1, player2];

/* var character;
var loadCharacter = function() {
  console.log('Character has loaded');
  context.drawImage(character, 0, 450, 50, 50);
}; */

// Events -------------------------------------------------------------------
$(function(){
  // Directional Control
  $(document).keydown(function(d) {
    switch(d.keyCode){
      case 37:
        if(player1.velocity[0] > -6 && player1.X > 0) {
          player1.velocity[0] -= 2;
        }
        break;
      case 39:
        if(player1.velocity[0] < 6 && player1.X + player1.width < 800) {
          player1.velocity[0] += 2;
        }
        break;
      case 38:
        if(player1.velocity[1] > -6 && player1.velocity[1] === 0 && player1.Y > 0 ) {
          player1.velocity[1] -= 6;
        }
        break;
      case 65:
        if(player2.velocity[0] > -6 && player2.X > 0) {
          player2.velocity[0] -= 2;
        }
        break;
      case 68:
        if(player2.velocity[0] < 6 && player2.X + player2.width < 800) {
          player2.velocity[0] += 2;
        }
        break;
      case 87:
        if(player2.velocity[1] > -6 && player2.velocity[1] === 0 && player2.Y > 0) {
          player2.velocity[1] -= 6;
        }
        break;
      case 83:
      default:
        break;
    }
  });

});

// GAME LOOP ----------------------------------------------------------------
gameLoop();
function gameLoop() {

  player1.X += player1.velocity[0];
  player1.Y += player1.velocity[1];

  player2.X += player2.velocity[0];
  player2.Y += player2.velocity[1];

  if(player1.velocity[1] < player1.gravity) player1.velocity[1] += player1.weight;
  if(player2.velocity[1] < player2.gravity) player2.velocity[1] += player1.weight;

  // Canvas Boundaries ----------------
  if(player1.X + player1.width >= canvas.width) player1.velocity[0] = -1;
  if(player1.X <= 0) player1.velocity[0] = 1;
  if((player1.Y + player1.height) >= canvas.height) player1.velocity[1] = 0;
  if(player1.Y <= 0) player1.velocity[1] = 1;

  if(player2.X + player2.width >= canvas.width) player2.velocity[0] = -1;
  if(player2.X <= 0) player2.velocity[0] = 1;
  if((player2.Y + player2.height) >= canvas.height) player2.velocity[1] = 0;
  if(player2.Y <= 0) player2.velocity[1] = 1;

  if(player1.X < 350 && player1.Y <= 395) {
    player1.velocity[1] = 1;
  }

// Rendering

  // Canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 800;
  canvas.height = 500;
  canvas.style = 'border: 3px solid black; text-align: center; background-image: url("dungeon.jpeg")';
  canvas.fillStyle = 'red';

  // Canvas Platforms
  context.fillRect(0, 375, 350, 20);
  context.fillRect(450, 375, 350, 20);
  context.fillRect(100, 250, 600, 20);
  context.fillRect(0, 125, 350, 20);
  context.fillRect(450, 125, 350, 20);

  // Sprites
  context.drawImage(player1.sprite, player1.X, player1.Y, player1.width, player1.height);
  context.drawImage(player2.sprite, player2.X, player2.Y, player2.width, player2.height);

// Loop Time
  setTimeout(gameLoop, 1000/60);
}

// OBJECTS ------------------------------------------------------------------
function Sprite(img, w, h, x, y, vx, vy, g, wt) {
  this.sprite = new Image();
  this.sprite.src = img;
  this.width = w;
  this.height = h;
  this.X = x;
  this.Y = y;
  this.velocity = [vx, vy];
  this.gravity = g;
  this.weight = wt;
}
// function level(){
//   this.level: new Level;
// }

/* function Platforms() {
  this.platforms = [];
} */
