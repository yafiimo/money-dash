/* global Sprite, handleKeyDown, gameLoop */

// Events -------------------------------------------------------------------
$(function() {
  $('#instructions').hide();
  $('#instructionsButton').click(function () {
    $('#instructions').toggle();
  });
  $('#startButton').click(function () {
    $('#startScreen').hide();
    $('#instructions').hide();
    $('#canvas').show();

    var score = 0;
    var level = 0;
    var lives = 5;
    var canvas = document.getElementById('game-screen');
    var context = canvas.getContext('2d');
    var landscapes = ['url("images/level1.png")', 'url("images/level2.png")', 'url("images/level3.png")'];

    var platforms = [[[0, 525, 510, 20], [690, 525, 510, 20], [200, 360, 800, 20], [0, 190, 510, 20], [690, 190, 510, 20]],
                  [[60, 600, 1080, 20], [0, 450, 510, 20], [150, 290, 500, 20], [690, 450, 510, 20], [575, 100, 500, 20]],
                  [[0, 525, 510, 20], [690, 525, 510, 20], [200, 360, 800, 20], [0, 190, 510, 20], [690, 190, 510, 20]]];

    var targetXY = [[1000, 30], [580, 650], [5, 100], [1000, 650], [30, 450], [50, 70],
                    [1000, 30], [580, 650], [5, 300], [1000, 650], [30, 500], [250, 200],
                    [1000, 30], [580, 600], [5, 100], [1000, 650], [30, 450], [50, 70], [1000, 30]];

    var player = new Sprite('images/player1.png', 40, 40, 10, 485, 0, 0, 1, 0.1);
    var target = new Sprite('images/coin.png', 40, 40, 1000, 30);

    var enemy1 = new Sprite('images/death.png', 50, 50, 1150, 650, 0, 0, 0, 0);
    var enemy2 = new Sprite('images/death.png', 50, 50, 200, 310, 0, 0, 0, 0);
    var enemies = [enemy1, enemy2];

    $(document).keydown(function(event) {
      handleKeyDown(event, player);
    });
    gameLoop(canvas, context, landscapes, platforms, player, enemies, target, targetXY, score, level, lives);
  });

});
