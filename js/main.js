/* global Sprite, handleKeyDown, gameLoop */

// Events -------------------------------------------------------------------
$(function() {
  $('#startButton').click(function () {
    $('#startScreen').hide();
    $('#canvas').show();
    $('#score').show();
    $('#scoreboard').show();
    var canvas = document.getElementById('game-screen');
    var context = canvas.getContext('2d');
    var landscapes = ['url("images/level1.png")', 'url("images/level2.jpg")', 'url("images/level3.png")'];

    var player = new Sprite('images/player1.png', 40, 40, 10, 660, 0, 0, 20, 0.1);
    var money = new Sprite('images/coin.png', 40, 40, 1000, 30);

    var enemy1 = new Sprite('images/death.png', 50, 50, 1150, 650, 0, 0, 0, 0);
    var enemy2 = new Sprite('images/death.png', 50, 50, 200, 310, 0, 0, 0, 0);
    var enemySprites = [enemy1, enemy2];


    var targetPosition = [[1000, 30], [580, 600], [5, 10], [1000, 650], [30, 450], [50, 30],
                          [1000, 30], [580, 650], [5, 300], [1000, 650], [30, 500], [250, 200],
                          [1000, 30], [580, 600], [5, 10], [1000, 650], [30, 450], [50, 30]];

    var stages = [[[0, 525, 510, 20], [690, 525, 510, 20], [200, 360, 800, 20], [0, 190, 510, 20], [690, 190, 510, 20]],
                  [[60, 600, 1080, 20], [0, 450, 510, 20], [690, 450, 510, 20], [150, 290, 500, 20], [575, 100, 500, 20]],
                  [[0, 525, 510, 20], [690, 525, 510, 20], [200, 360, 800, 20], [0, 190, 510, 20], [690, 190, 510, 20]]];

    $(document).keydown(function(event) {
      handleKeyDown(event, player);
    });
    gameLoop(canvas, context, landscapes, stages, player, enemySprites, money, targetPosition);
  });


});
