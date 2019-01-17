// function to handle directional control of the player
function handleKeyDown(event, player) {

  switch(event.keyCode){
    case 37:
      if(player.velocity[0] > -3 && player.X > 0) {
        if (player.velocity[0] > 0) {
          player.velocity[0] -= 2;
        } else {
          player.velocity[0] -= 1;
        }
        if (player.velocity[0] < 0) {
          player.sprite.src = 'images/player-wl.png';
        } else {
          player.sprite.src = 'images/player-l.png';
        }
      }
      break;
    case 39:
      if(player.velocity[0] < 3 && player.X + player.width < 1200) {
        if (player.velocity[0] < 0) {
           player.velocity[0] += 2; 
        } else {
          player.velocity[0] += 1;
        }
        if (player.velocity[0] > 0) {
          player.sprite.src = 'images/player-wr.png';
        } else {
          player.sprite.src = 'images/player-r.png';
        }
      }
      break;
    case 38:
      if(player.velocity[1] > -6.5 && player.velocity[1] === 0 && player.Y > 0 ) {
        player.velocity[1] -= 6.5;
      }
      break;
    default:
      break;
  }
}
