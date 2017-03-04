console.log('in main.js');
console.log($);

var canvas = document.getElementById('game_screen');
var context = canvas.getContext('2d');
var player1 = new Sprite('stickman.png', 40, 40, 0, 460, 0, 0);
/* var character;
var loadCharacter = function() {
  console.log('Character has loaded');
  context.drawImage(character, 0, 450, 50, 50);
}; */

// Events
$(function(){
  // Directional Control
  $(document).keydown(function(e) {
    switch(e.keyCode){
      case 37:
        if(player1.Velocity[0] > -4 && player1.X > 0) {
          player1.Velocity[0] -= 2;
        }
        break;
      case 39:
        if(player1.Velocity[0] < 4 && player1.X + player1.width < 800) {
          player1.Velocity[0] += 2;
        }
        break;
      case 38:
        if(player1.Velocity[1] > -6 && player1.Y > 0) {
          player1.Velocity[1] -= 6;
        }
        break;
      case 40:
        if(player1.Velocity[1] < 4 && player1.Y + player1.height < 500) {
          player1.Velocity[1] += 2;
        }
        break;
      default:
        break;
    }
  });
});

// Game Loop
gameLoop();
function gameLoop() {

  player1.X += player1.Velocity[0];
  player1.Y += player1.Velocity[1];

  // Canvas Boundaries
  if((player1.X + player1.width) >= 800) player1.Velocity[0] = 0;
  if(player1.X <= 0) player1.Velocity[0] = 0;
  if((player1.Y + player1.width) >= 500) player1.Velocity[1] = 0;
  if(player1.Y <= 0) player1.Velocity[1] = 0;


// RENDERING
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 800;
  canvas.height = 500;
  canvas.style = 'border: 3px solid black; text-align: center';
  canvas.fillStyle = 'red';

  context.fillRect(0, 375, 700, 20);
  context.fillRect(100, 250, 700, 20);
  context.fillRect(0, 125, 700, 20);

  context.drawImage(player1.sprite, player1.X, player1.Y, player1.width, player1.height);
  /* character = new Image();
  character.onload = loadCharacter;
  character.src = 'stickman.png'; */

  setTimeout(gameLoop, 1000/60);
}

function Sprite(img, w, h, x, y, vx, vy) {
  this.sprite = new Image();
  this.sprite.src = img;
  this.width = w;
  this.height = h;
  this.X = x;
  this.Y = y;
  this.Velocity = [vx, vy];
}
