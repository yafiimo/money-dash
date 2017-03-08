/* global Sprite, handleKeyDown, gameLoop */

// Events -------------------------------------------------------------------
$(function() {

  var canvas = document.getElementById('game-screen');
  var context = canvas.getContext('2d');
  var stages = [[0, 525, 510, 20], [690, 525, 510, 20], [200, 360, 800, 20], [0, 190, 510, 20], [690, 190, 510, 20]];
  var player = new Sprite('images/player1.png', 30, 30, 10, 670, 0, 0, 20, 0.1);
  var money = new Sprite('images/coin.png', 40, 40, 1000, 30);

  $(document).keydown(function(event) {
    handleKeyDown(event, player);
  });
  gameLoop(canvas, context, stages, player, money);
});
