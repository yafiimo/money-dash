// GAME LOOP ----------------------------------------------------------------
function gameLoop(canvas, context, player, targets) {
  var player1 = player;
  var target1 = targets[0];


  // Motion
  player1.X += player1.velocity[0];
  player1.Y += player1.velocity[1];
  if(player1.velocity[1] < player1.gravity) player1.velocity[1] += player1.weight;

  // Canvas Boundaries ----------------
  if(player1.X + player1.width >= canvas.width) player1.velocity[0] = -1;
  if(player1.X <= 0) player1.velocity[0] = 1;
  if((player1.Y + player1.height) >= canvas.height) player1.velocity[1] = 0;
  if(player1.Y <= 0) player1.velocity[1] = 1;

  // Bottom Left
  if(player1.X < 350 && player1.Y <= 395 && player1.Y >= 375) {
    player1.velocity[1] = 1;
  }
  if(player1.X < 350 && player1.Y + player1.height <= 395 && player1.Y + player1.height >= 375) {
    player1.velocity[1] = 0;
  }
  if(player1.Y > 375 - player1.height && player1.Y < 395 && player1.X === 350) {
    player1.velocity[0] = 1;
  }
  // Bottom Right
  if(player1.X + player1.width > 450 && player1.Y <= 395 && player1.Y >= 375){
    player1.velocity[1] = 1;
  }
  if(player1.X + player1.width > 450 && player1.Y + player1.height <= 395 && player1.Y + player1.height >= 375) {
    player1.velocity[1] = 0;
  }
  if(player1.Y > 335 && player1.Y < 395 && player1.X + player1.width === 450) {
    player1.velocity[0] = -1;
  }
  // Middle
  if(player1.X + player1.width > 100 && player1.X < 700 && player1.Y <= 270 && player1.Y >= 250) {
    player1.velocity[1] = 1;
  }
  if(player1.X + player1.width > 100 && player1.X < 700 && player1.Y + player1.height <= 270 && player1.Y + player1.height >= 250) {
    player1.velocity[1] = 0;
  }
  // Top Left
  if(player1.X < 350 && player1.Y <= 145 && player1.Y >= 125) {
    player1.velocity[1] = 1;
  }
  if(player1.X < 350 && player1.Y + player1.height <= 145 && player1.Y + player1.height >= 125) {
    player1.velocity[1] = 0;
  }
  // if(player1.Y > 85 && player1.Y < 345 && player1.X === 350) {
  //   player1.velocity[0] = 1;
  // }
  // Top Right
  if(player1.X + player1.width > 450 && player1.Y <= 145 && player1.Y >= 125) {
    player1.velocity[1] = 1;
  }
  if(player1.X + player1.width> 450 && player1.Y + player1.height <= 145 && player1.Y + player1.height >= 125) {
    player1.velocity[1] = 0;
  }
  // if(player1.Y > 85 && player1.Y < 345 && player1.X === 350) {
  //   player1.velocity[0] = 1;
  // }

// Rendering

  // Canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 800;
  canvas.height = 500;
  canvas.style = 'border: 3px solid black; text-align: center; background-image: url("images/landscape.png")';
  canvas.fillStyle = 'red';

  // Canvas Platforms
  var platformBL = context.fillRect(0, 375, 350, 20); // Bottom Left
  var platformBR = context.fillRect(450, 375, 350, 20); // Bottom Right
  var platformM = context.fillRect(100, 250, 600, 20); // Middle
  var platformTL = context.fillRect(0, 125, 350, 20); // Top Left
  var platformTR = context.fillRect(450, 125, 350, 20); // Top Right

  // Sprites
  context.drawImage(player1.sprite, player1.X, player1.Y, player1.width, player1.height);
  context.drawImage(target1.sprite, target1.X, target1.Y, target1.width, target1.height);
  // context.drawImage(player2.sprite, player2.X, player2.Y, player2.width, player2.height);

  // Loop Time
  setTimeout(function() {
    gameLoop(canvas, context, player, targets);
  }, 5);
}
