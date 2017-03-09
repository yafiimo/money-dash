// GAME LOOP --------------------------------------------------------------------------------------------------------
var score = 0;
var level = 0;

function gameLoop(canvas, context, landscapes, stages, player, enemySprites, money, targetPosition) {
  var p1 = player;
  var target = money;
  var targetXY = targetPosition;
  var s = stages[level];
  var enemies = enemySprites;

// Motion ------------------------------------------------------------------------------------
  // Sprite Motion
  p1.move();
  enemies[0].move();
  enemies[1].move();
  target.X = targetXY[score][0];
  target.Y = targetXY[score][1];

  // Canvas Boundaries
  if(p1.X + p1.width >= canvas.width) p1.velocity[0] = -1;
  if(p1.X <= 0) p1.velocity[0] = 1;
  if(p1.Y + p1.height >= canvas.height) p1.velocity[1] = 0;
  if(p1.Y <= 0) p1.velocity[1] = 1;

  // Platform Boundaries
  if(p1.X + p1.width > s[0][0] && p1.X < s[0][0] + s[0][2] && p1.Y <= s[0][1] + s[0][3] && p1.Y >= s[0][1]) p1.velocity[1] = 1;
  if(p1.X + p1.width > s[0][0] && p1.X < s[0][0] + s[0][2] && p1.Y + p1.height <= s[0][1] + s[0][3] && p1.Y + p1.height >= s[0][1]) p1.velocity[1] = 0;
  if(p1.Y > s[0][1] - p1.height && p1.Y < s[0][1] + s[0][3] && p1.X === s[0][2]) p1.velocity[0] = 1;

  if(p1.X + p1.width > s[1][0] && p1.X < s[1][0] + s[1][2] && p1.Y <= s[1][1] + s[1][3] && p1.Y >= s[1][1]) p1.velocity[1] = 1;
  if(p1.X + p1.width > s[1][0] && p1.X < s[1][0] + s[1][2] && p1.Y + p1.height <= s[1][1] + s[1][3] && p1.Y + p1.height >= s[1][1]) p1.velocity[1] = 0;
  if(p1.Y > s[1][1] - p1.height && p1.Y < s[1][1] + s[1][3] && p1.X + p1.width === s[1][0]) p1.velocity[0] = -1;

  if(p1.X + p1.width > s[2][0] && p1.X < s[2][0] + s[2][2] && p1.Y <= s[2][1] + s[2][3] && p1.Y >= s[2][1]) p1.velocity[1] = 1;
  if(p1.X + p1.width > s[2][0] && p1.X < s[2][0] + s[2][2] && p1.Y + p1.height <= s[2][1] + s[2][3] && p1.Y + p1.height >= s[2][1]) p1.velocity[1] = 0;

  if(p1.X + p1.width > s[3][0] && p1.X < s[3][0] + s[3][2] && p1.Y <= s[3][1] + s[3][3] && p1.Y >= s[3][1]) p1.velocity[1] = 1;
  if(p1.X + p1.width > s[3][0] && p1.X < s[3][0] + s[3][2] && p1.Y + p1.height <= s[3][1] + s[3][3] && p1.Y + p1.height >= s[3][1]) p1.velocity[1] = 0;

  if(p1.X + p1.width > s[4][0] && p1.X < s[4][0] + s[4][2] && p1.Y <= s[4][1] + s[4][3] && p1.Y >= s[4][1]) p1.velocity[1] = 1;
  if(p1.X + p1.width > s[4][0] && p1.X < s[4][0] + s[4][2] && p1.Y + p1.height <= s[4][1] + s[4][3] && p1.Y + p1.height >= s[4][1]) p1.velocity[1] = 0;


  // enemy1 boundaries
  if(enemies[0].X + enemies[0].width >= canvas.width) enemies[0].velocity[0] = -1;
  if(enemies[0].X <= 0) enemies[0].velocity[0] = 1;
  // enemy2 boundaries
  if(enemies[1].X + enemies[1].width >= 1000) enemies[1].velocity[0] = -1;
  if(enemies[1].X <= 200) enemies[1].velocity[0] = 1;

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

  // Sprites
  context.drawImage(p1.sprite, p1.X, p1.Y, p1.width, p1.height);
  context.drawImage(enemies[0].sprite, enemies[0].X, enemies[0].Y, enemies[0].width, enemies[0].height);
  context.drawImage(enemies[1].sprite, enemies[1].X, enemies[1].Y, enemies[1].width, enemies[1].height);
  context.drawImage(target.sprite, target.X, target.Y, target.width, target.height);

  // Respawn
  if(p1.X + p1.width >= target.X && p1.X <= target.X + target.width && p1.Y <= target.Y + target.height && p1.Y >= target.Y){
    score++;
    document.getElementById('score').children[0].innerHTML = score;
    if(score % 6 === 0) {
      level++;
      p1.X = 10;
      p1.Y = 660;
      p1.velocity = [0, 0];
    }
    if(score === 18) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      alert('You Win!!');
    }
  }

  // Loop Time
  setTimeout(function() {
    gameLoop(canvas, context, landscapes, stages, player, enemySprites, money, targetPosition);
  }, 7);
}
