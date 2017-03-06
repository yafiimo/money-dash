// Directional Control
function handleKeyDown(event, player) {
  var player1 = player;

  switch(event.keyCode){
    case 37:
      if(player1.velocity[0] > -3 && player1.X > 0) {
        player1.velocity[0] -= 1;
      }
      break;
    case 39:
      if(player1.velocity[0] < 3 && player1.X + player1.width < 800) {
        player1.velocity[0] += 1;
      }
      break;
    case 38:
      if(player1.velocity[1] > -6 && player1.velocity[1] === 0 && player1.Y > 0 ) {
        player1.velocity[1] -= 6;
      }
      break;
    // case 65:
    //   if(player2.velocity[0] > -6 && player2.X > 0) {
    //     player2.velocity[0] -= 2;
    //   }
    //   break;
    // case 68:
    //   if(player2.velocity[0] < 6 && player2.X + player2.width < 800) {
    //     player2.velocity[0] += 2;
    //   }
    //   break;
    // case 87:
    //   if(player2.velocity[1] > -6 && player2.velocity[1] === 0 && player2.Y > 0) {
    //     player2.velocity[1] -= 6;
    //   }
    //   break;
    default:
      break;
  }
}
