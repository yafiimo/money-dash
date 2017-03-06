// GAME LOOP ----------------------------------------------------------------
function gameLoop(canvas, context, players, targets) {
  var player1 = players[0];
  var target1 = targets[0];

  for(var i = 0; i < players.length; i++) {
  // Motion
    players[i].X += players[i].velocity[0];
    players[i].Y += players[i].velocity[1];
    if(players[i].velocity[1] < players[i].gravity) players[i].velocity[1] += players[i].weight;

    // Canvas Boundaries ----------------
    if(players[i].X + players[i].width >= canvas.width) players[i].velocity[0] = -1;
    if(players[i].X <= 0) players[i].velocity[0] = 1;
    if((players[i].Y + players[i].height) >= canvas.height) players[i].velocity[1] = 0;
    if(players[i].Y <= 0) players[i].velocity[1] = 1;

    if(players[i].X < 350 && players[i].Y <= 395 && players[i].Y >= 375) {
      players[i].velocity[1] = 1;
    }
    if(players[i].X < 350 && players[i].Y + players[i].height <= 395 && players[i].Y + players[i].height >= 375) {
      players[i].velocity[1] = 0;
    }
    if(players[i].Y > 375 - players[i].height && players[i].Y < 395 && players[i].X === 350) {
      players[i].velocity[0] = 1;
    }
    // -------------------------------------------------------------------------------------------------------------
    if(players[i].X + players[i].width > 450 && players[i].Y <= 395 && players[i].Y >= 375){
      players[i].velocity[1] = 1;
    }
    if(players[i].X + players[i].width > 450 && players[i].Y + players[i].height <= 395 && players[i].Y + players[i].height >= 375) {
      players[i].velocity[1] = 0;
    }
    if(players[i].Y > 335 && players[i].Y < 395 && players[i].X + players[i].width === 450) {
      players[i].velocity[0] = -1;
    }
    // -------------------------------------------------------------------------------------------------------------
    if(players[i].X + players[i].width > 100 && players[i].X < 700 && players[i].Y <= 270 && players[i].Y >= 250) {
      players[i].velocity[1] = 1;
    }
    if(players[i].X + players[i].width > 100 && players[i].X < 700 && players[i].Y + players[i].height <= 270 && players[i].Y + players[i].height >= 250) {
      players[i].velocity[1] = 0;
    }
    // -------------------------------------------------------------------------------------------------------------
    if(players[i].X < 350 && players[i].Y <= 145 && players[i].Y >= 125) {
      players[i].velocity[1] = 1;
    }
    if(players[i].X < 350 && players[i].Y + players[i].height <= 145 && players[i].Y + players[i].height >= 125) {
      players[i].velocity[1] = 0;
    }
    // if(players[i].Y > 85 && players[i].Y < 345 && players[i].X === 350) {
    //   players[i].velocity[0] = 1;
    // }
    // -------------------------------------------------------------------------------------------------------------
    if(players[i].X + players[i].width > 450 && players[i].Y <= 145 && players[i].Y >= 125) {
      players[i].velocity[1] = 1;
    }
    if(players[i].X + players[i].width> 450 && players[i].Y + players[i].height <= 145 && players[i].Y + players[i].height >= 125) {
      players[i].velocity[1] = 0;
    }
    // if(players[i].Y > 85 && players[i].Y < 345 && players[i].X === 350) {
    //   players[i].velocity[0] = 1;
    // }
  }

// Rendering

  // Canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 800;
  canvas.height = 500;
  canvas.style = 'border: 3px solid black; text-align: center; background-image: url("images/landscape.png")';
  canvas.fillStyle = 'red';

  // Canvas Platforms
  context.fillRect(0, 375, 350, 20);
  context.fillRect(450, 375, 350, 20);
  context.fillRect(100, 250, 600, 20);
  context.fillRect(0, 125, 350, 20);
  context.fillRect(450, 125, 350, 20);

  // Sprites
  context.drawImage(player1.sprite, player1.X, player1.Y, player1.width, player1.height);
  context.drawImage(target1.sprite, target1.X, target1.Y, target1.width, target1.height);
  // context.drawImage(player2.sprite, player2.X, player2.Y, player2.width, player2.height);

  // Loop Time
  setTimeout(function() {
    gameLoop(canvas, context, players, targets);
  }, 1000/200);
}
