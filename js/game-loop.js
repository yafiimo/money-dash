// GAME LOOP --------------------------------------------------------------------------------------------------------
function gameLoop(canvas, context, stages, player, money) {
  var p1 = player;
  var target = money;
  var targetPosition = [[200, 30], [580, 600], [5, 10], [1000, 650], [30, 500], [1000, 30]];
  var score = 0;
  var s = stages;

// Motion ------------------------------------------------------------------------------------
  p1.move();

// Canvas Boundaries -------------------------------------------------------------------------
  if(p1.X + p1.width >= canvas.width) p1.velocity[0] = -1;
  if(p1.X <= 0) p1.velocity[0] = 1;
  if((p1.Y + p1.height) >= canvas.height) p1.velocity[1] = 0;
  if(p1.Y <= 0) p1.velocity[1] = 1;

  // Bottom Left
  if(p1.X < s[0][2] && p1.Y <= s[0][1] + s[0][3] && p1.Y >= s[0][1]) {
    p1.velocity[1] = 1;
  }
  if(p1.X < s[0][2] && p1.Y + p1.height <= s[0][1] + s[0][3] && p1.Y + p1.height >= s[0][1]) {
    p1.velocity[1] = 0;
  }
  if(p1.Y > s[0][1] - p1.height && p1.Y < s[0][1] + s[0][3] && p1.X === s[0][2]) {
    p1.velocity[0] = 1;
  }
  // Bottom Right
  if(p1.X + p1.width > s[1][0] && p1.Y <= s[1][1] + s[1][3] && p1.Y >= s[1][1]){
    p1.velocity[1] = 1;
  }
  if(p1.X + p1.width > s[1][0] && p1.Y + p1.height <= s[1][1] + s[1][3] && p1.Y + p1.height >= s[1][1]) {
    p1.velocity[1] = 0;
  }
  if(p1.Y > s[1][1] - p1.height && p1.Y < s[1][1] + s[1][3] && p1.X + p1.width === s[1][0]) {
    p1.velocity[0] = -1;
  }
  // Middle
  if(p1.X + p1.width > s[2][0] && p1.X < s[2][0] + s[2][2] && p1.Y <= s[2][1] + s[2][3] && p1.Y >= s[2][1]) {
    p1.velocity[1] = 1;
  }
  if(p1.X + p1.width > s[2][0] && p1.X < s[2][0] + s[2][2] && p1.Y + p1.height <= s[2][1] + s[2][3] && p1.Y + p1.height >= s[2][1]) {
    p1.velocity[1] = 0;
  }
  // Top Left
  if(p1.X < s[3][2] && p1.Y <= s[3][1] + s[3][3] && p1.Y >= s[3][1]) {
    p1.velocity[1] = 1;
  }
  if(p1.X < s[3][2] && p1.Y + p1.height <= s[3][1] + s[3][3] && p1.Y + p1.height >= s[3][1]) {
    p1.velocity[1] = 0;
  }
  // Top Right
  if(p1.X + p1.width > s[4][0] && p1.Y <= s[4][1] + s[4][3] && p1.Y >= s[4][1]) {
    p1.velocity[1] = 1;
  }
  if(p1.X + p1.width> s[4][0] && p1.Y + p1.height <= s[4][1] + s[4][3] && p1.Y + p1.height >= s[4][1]) {
    p1.velocity[1] = 0;
  }

// Target Respawn ------------------------------------------------------------------------------------------------

  for(var j = 0; j < 7; j++) {
    if(p1.X + p1.width >= target.X && p1.X <= target.X + target.width && p1.Y <= target.Y + target.height && p1.Y >= target.Y){
      target.X = targetPosition[j][0];
      target.Y = targetPosition[j][1];
      score += 1;
      document.getElementById('score').children[0].innerHTML = score;
      // level++
    }
  }
// Rendering ------------------------------------------------------------------------------------------------

  // Canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 1200;
  canvas.height = 700;
  canvas.style = 'border: 3px solid black; text-align: center; background-image: url("images/landscape.png")';
  canvas.fillStyle = 'red';


  for(var i = 0; i < 5; i ++) {
    context.fillRect(s[i][0], s[i][1], s[i][2], s[i][3], s[i][4]);
  }


  // Sprites
  context.drawImage(p1.sprite, p1.X, p1.Y, p1.width, p1.height);
  context.drawImage(target.sprite, target.X, target.Y, target.width, target.height);

  // Loop Time
  setTimeout(function() {
    gameLoop(canvas, context, stages, player, money);
  }, 7);
}
