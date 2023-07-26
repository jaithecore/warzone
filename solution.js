// GAME DATA
let game = {
  playerOne: {
    health: 100,
    wins: 0,
  },
  playerTwo: {
    health: 100,
    wins: 0,
  },
  rounds: 1,
  turn: "playerOne",
};

//
const BulletIntensity = () => {
  return Math.round(Math.random() * 100);
};

// INITALIZING THE GAME
const startGame = () => {
  if (game.turn === "playerOne") {
    //
    game.playerTwo.health = game.playerTwo.health - BulletIntensity();

    // updating the next player turn
    game.turn = "playerTwo";
  } else {
    //
    game.playerOne.health = game.playerOne.health - BulletIntensity();
    // updating the next player turn
    game.turn = "playerOne";
  }
  console.log("Final State", game.playerOne.health, game.playerTwo.health);
};

// START GAME
// starting the game in loop until one of the player health become zero

do {
  console.log("Round: ", game.rounds);
  // Updating a round
  game.rounds = game.rounds + 1;
  game.playerOne.health = 100;
  game.playerTwo.health = 100;

  do {
    startGame();
  } while (game.playerOne.health >= 0 && game.playerTwo.health >= 0);
} while (game.rounds <= 3);
