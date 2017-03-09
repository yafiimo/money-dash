// GAME LOOP --------------------------------------------------------------------------------------------------------
var score = 0;
var level = 0;
var lives = 5;

function gameLoop(canvas, context, landscapes, stages, player, enemies, target, targetXY) {
  var s = stages[level];

// Motion ------------------------------------------------------------------------------------
  // Sprite Motion
  player.move();
  enemies[0].move();
  enemies[1].move();
  target.X = targetXY[score][0];
  target.Y = targetXY[score][1];

  // Canvas Boundaries
  if(player.X + player.width >= canvas.width) player.velocity[0] = -1;
  if(player.X <= 0) player.velocity[0] = 1;
  if(player.Y + player.height >= canvas.height) player.velocity[1] = 0;
  if(player.Y <= 0) player.velocity[1] = 1;

  // Platform Boundaries
  for(var j = 0; j < 5; j++) {
    if(player.X + player.width > s[j][0] && player.X < s[j][0] + s[j][2] && player.Y <= s[j][1] + s[j][3] && player.Y >= s[j][1]) player.velocity[1] = 1;
    if(player.X + player.width > s[j][0] && player.X < s[j][0] + s[j][2] && player.Y + player.height <= s[j][1] + s[j][3] && player.Y + player.height >= s[j][1]) player.velocity[1] = 0;
    if(player.Y + player.height > s[j][1] && player.Y < s[j][1] + s[j][3] && player.X === s[j][0] + s[j][2]) player.velocity[0] = 1;
    if(player.Y + player.height > s[j][1] && player.Y < s[j][1] + s[j][3] && player.X + player.width === s[j][0]) player.velocity[0] = -1;
  }


  // enemy1 boundaries
  if(level === 0 || level === 2){
    if(enemies[0].X + enemies[0].width >= canvas.width) enemies[0].velocity[0] = -1;
    if(enemies[0].X <= 0) enemies[0].velocity[0] = 1;
    // enemy2 boundaries
    if(enemies[1].X + enemies[1].width >= s[2][0]+ s[2][2]) enemies[1].velocity[0] = -1;
    if(enemies[1].X <= s[2][0]) enemies[1].velocity[0] = 1;
  }
  if(level === 1){
    enemies[1].velocity[0] = 1;
    enemies[1].X = 150;
    enemies[1].Y = 240;
    if(enemies[0].X + enemies[0].width >= canvas.width) enemies[0].velocity[0] = -1;
    if(enemies[0].X <= 0) enemies[0].velocity[0] = 1;
    // enemy2 boundaries
    if(enemies[1].X + enemies[1].width >= 650) enemies[1].velocity[0] = -1;
    if(enemies[1].X <= 150) enemies[1].velocity[0] = 1;
  }

// Rendering ------------------------------------------------------------------------------------------------

  // Canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 1200;
  canvas.height = 700;
  canvas.style = 'border: 3px solid black; text-align: center';
  canvas.style.backgroundImage = landscapes[level];
  for(var i = 0; i < 5; i ++) {
    context.fillRect(s[i][0], s[i][1], s[i][2], s[i][3], s[i][4]);
  }

  // Display
  context.font = '30px Impact';
  context.fillStyle = '#FF0000';
  context.fillText('Score: ' + score, 50, 50);

  context.font = '30px Impact';
  context.fillStyle = '#FF0000';
  context.fillText('Lives: ' + lives, 300, 50);

  // Sprites
  context.drawImage(player.sprite, player.X, player.Y, player.width, player.height);
  context.drawImage(target.sprite, target.X, target.Y, target.width, target.height);

  context.drawImage(enemies[0].sprite, enemies[0].X, enemies[0].Y, enemies[0].width, enemies[0].height);
  context.drawImage(enemies[1].sprite, enemies[1].X, enemies[1].Y, enemies[1].width, enemies[1].height);

  // Respawn
  if(player.X + player.width >= target.X && player.X <= target.X + target.width && player.Y <= target.Y + target.height && player.Y >= target.Y){
    score++;
    if(score % 6 === 0) {
      level++;
      player.X = 10;
      player.Y = 660;
      player.velocity = [0, 0];
    }
    if(score === 18) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = '100px Impact';
      context.fillStyle = '#FF0000';
      context.fillText('YOU WIN!', 380, 350);
    }
  }
  for(var n = 0;  n < 2; n++){
    if(player.X + player.width > enemies[n].X && player.X < enemies[n].X + enemies[n].width
      && player.Y + player.height > enemies[n].Y && player.Y < enemies[n].Y + enemies[n].height) {
      if(lives === 1){
        lives += 5;
        level = 3;
        score = 18;
        context.font = '100px Impact';
        context.fillStyle = '#FF0000';
        context.fillText('GAME OVER!', 380, 350);
      }
      player.X = 10;
      player.Y = 660;
      player.velocity[0] = 0;
      player.velocity[1] = 0;
      lives--;
    }
  }

  // Loop Time
  setTimeout(function() {
    gameLoop(canvas, context, landscapes, stages, player, enemies, target, targetXY);
  }, 7);
}
