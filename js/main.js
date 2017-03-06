/* global Sprite, handleKeyDown, gameLoop */

// Events -------------------------------------------------------------------
$(function() {
  var canvas = document.getElementById('game_screen');
  var context = canvas.getContext('2d');

  // var level1 = [[0, 375, 350, 20], [450, 375, 350, 20], [100, 250, 600, 20], [450, 125, 350, 20]]
  // var levels = [level1, level2, level3, level4, level5];
  var player1 = new Sprite('images/player1.png', 30, 30, 10, 460, 0, 0, 20, 0.1);
  // var player2 = new Sprite('player2.png', 40, 40, 750, 460, 0, 0, 20, 0.1);
  var players = [player1/*, player2*/];
  var coin1 = new Sprite('images/coin.png', 40, 40, 700, 20, 0, 0, 0, 0);
  var targets = [coin1];

  $(document).keydown(function(event) {
    handleKeyDown(event, players);
  });
  gameLoop(canvas, context, players, targets);

  // OBJECTS ------------------------------------------------------------------
  // function level(){
  //   this.level: new Level;
  // }

  /* function Platforms() {
    this.platforms = [];
  } */
});
