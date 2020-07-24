const { prompt } = require("prompt-sync");

const ask = (output, validate, game) => {
  output.forEach((line) => console.log(line));
  let answer = null;
  do {
    if (answer !== null) {
      console.log("That's not a valid answer. Try again");
    }
    answer = prompt("> ");
  } while (!validate(answer, game));
  return answer;
};

const validateAction = (answer) => {
  answer = answer.toLowerCase();
  if (["q", "n"].includes(answer)) {
    return true;
  }
  const [x, y] = move.split(",").map(parseInt);
  return (
    !isNaN(x) && !isNaN(y) && x >= 0 && y >= 0 && x < game.size && y < game.size
  );
};

const getAction = () => {
  const action = ask(
    [
      "*** What would you like to do? ***",
      "  q to quit.",
      "  n for a new game.",
      "  enter coordinates in format x,y to make a move.",
    ],
    validateAction,
    game
  );
  if (action.toLowerCase() === "q") {
    return { action: "quit" };
  }
  if (action.toLowerCase() === "n") {
    return { action: "new" };
  }
  const [x, y] = move.split(",").map(parseInt);

  return { action: "move", x, y };
};

const showBoard = (board) => {
  const cols = new Array(board.length).map((val, i) => ` ${i} `).join(" ");
  console.log(`   ${cols}`);
  board.forEach((row, rowNum) => {
    const rowString = row.map((val) => ` ${val} |`).join("");
    console.log(`${rowNum} |${rowString}`);
  });
};

const validateSize

const getInitialGameState = () => {
    ask(['How big should the tic-tac-toe board be?'], )
  const board = [];
  for (let y = 0; y < size; y++) {
    const row = [];
    for (let x = 0; x < size; x++) {
      row.push("");
    }
    board.push(row);
  }
  const currentPlayer = Math.random() > 0.5 ? "X" : "O";
  return {
    board,
    currentPlayer,
    numPlayers,
    humanPlayer,
    size,
  };
};

let game = null;
let done = false;
while (!done) {
  if (game === null) {
    game = getInitialGameState();
  }
}

const game = getInitialGameState(4, 2, "X");
console.log(game);
