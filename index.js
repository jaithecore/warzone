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
  rounds: 0,
  turn: "playerOne",
};

let button = document.querySelector("[type='button']");
let rounds = document.querySelector("#rounds");
let playerOneWins = document.querySelector("#p1wins");
let playerTwoWins = document.querySelector("#p2wins");

//
const BulletIntensity = () => {
  return Math.round(Math.random() * 100);
};

const playerTurn = () => {
  let selection = Math.round(Math.random() * 1);

  // check if the the value is truthy
  if (selection === 1) {
    return "playerOne";
  } else {
    return "playerTwo";
  }
};

// INITALIZING THE GAME
const startRound = () => {
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

const roundWinner = () => {
  if (game.playerOne.health > game.playerTwo.health) {
    game.playerOne.wins += 1;
  } else {
    game.playerTwo.wins += 1;
  }
};

const updateUI = () => {
  rounds.innerText = "Number of Rounds: " + game.rounds;
  playerOneWins.innerText = "Player one Wins: " + game.playerOne.wins;
  playerTwoWins.innerText = "Player one Wins: " + game.playerTwo.wins;
};

// START GAME
// starting the game in loop until one of the player health become zero

// This loop is run when the game is start
// do {
//   console.log("Round: ", game.rounds);
//   console.log("Player Turn : ", playerTurn());

//   // This loop will run when the round
//   do {
//     startRound();
//   } while (game.playerOne.health >= 0 && game.playerTwo.health >= 0);

//   // Updating a round
//   game.rounds = game.rounds + 1;
//   game.turn = playerTurn();

//   roundWinner();

//   // updating the health of player at the start of the round
//   game.playerOne.health = 100;
//   game.playerTwo.health = 100;
// } while (game.rounds <= 3);

// WITH FOR LOOP
// for (let i = 1; i <= 3; i++) {
//   game.rounds += 1;
//   game.turn = playerTurn();
//   console.log("The Round: ", game.rounds);
//   console.log("The Player: ", game.playerOne, game.playerTwo);
//   console.log("The turn: ", game.turn);

//   while (game.playerOne.health >= 0 && game.playerTwo.health >= 0) {
//     startRound();
//   }

//   updateUI();

//   // STEP 1: check the winner
//   roundWinner();

//   // STEP 2: Reset the health
//   game.playerOne.health = 100;
//   game.playerTwo.health = 100;
// }

times = 1;

button.addEventListener("click", () => {
  if (game.rounds >= 3) {
    console.log("The Game has ended");
    return;
  } else {
    game.rounds += 1;
    game.turn = playerTurn();
    console.log("The Round: ", game.rounds);
    console.log("The Player: ", game.playerOne, game.playerTwo);
    console.log("The turn: ", game.turn);

    while (game.playerOne.health >= 0 && game.playerTwo.health >= 0) {
      startRound();
      updateUI();
    }

    // STEP 1: check the winner
    roundWinner();

    // STEP 2: Reset the health
    game.playerOne.health = 100;
    game.playerTwo.health = 100;
  }
});

console.log(game);
