/* global Sprite, handleKeyDown, gameLoop */

// Events -------------------------------------------------------------------
$(function() {
  var canvas = document.getElementById('game_screen');
  var context = canvas.getContext('2d');

  var player = new Sprite('images/player1.png', 30, 30, 10, 460, 0, 0, 20, 0.1);
  var coin1 = new Sprite('images/coin.png', 40, 40, 700, 20, 0, 0, 0, 0);
  var targets = [coin1];

  $(document).keydown(function(event) {
    handleKeyDown(event, player);
  });
  gameLoop(canvas, context, player, targets);
});
