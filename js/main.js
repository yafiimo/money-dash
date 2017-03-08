/* global Sprite, handleKeyDown, gameLoop */

// Events -------------------------------------------------------------------
$(function() {

  var canvas = document.getElementById('game-screen');
  var context = canvas.getContext('2d');
  var player = new Sprite('images/player1.png', 30, 30, 10, 670, 0, 0, 20, 0.1);
  var money = new Sprite('images/coin.png', 40, 40, 1000, 30);
  var targetPosition = [[1000, 30], [580, 600], [5, 10], [1000, 650], [30, 450], [50, 30],
                        [1000, 30], [580, 600], [5, 10], [1000, 650], [30, 450], [50, 30]];
  var stages = [[[0, 525, 510, 20], [690, 525, 510, 20], [200, 360, 800, 20], [0, 190, 510, 20], [690, 190, 510, 20]],
                [[0, 625, 510, 20], [690, 625, 510, 20], [200, 460, 800, 20], [0, 290, 510, 20], [690, 290, 510, 20]]];



  $(document).keydown(function(event) {
    handleKeyDown(event, player);
  });
  gameLoop(canvas, context, stages, player, money, targetPosition);
});
