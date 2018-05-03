// ---------- A tictactoe gaming library! ------------

/*
A game is an object with...
- gameS: a string describing the current gameS:
  - 'plr1': It is player 1's turn to play
  - 'plr2': It is player 2's turn to play
  - 'plr1won': Game over, the first player won
  - 'plr2won': Game over, the second player won
  - 'draw': Game over, nobody won
- board: An array of 9 numbers, each of which are either:
  - 0: An empty square
  - 1: Player 1 has a marker here
  - 2: Player 2 has a marker here
- line: an array of all poss involved in the win, otherwise empty array (STRETCH TASK)

The board array goes from top left to bottom right. For example, the array
[0,1,2,1,2,0,1,0,2] represents this board:

  .---.---.---.
  |   | 1 | 2 |
  |---+---+---|
  | 1 | 2 |   |
  |---+---+---|
  | 1 |   | 2 |
  '---'---'---'
*/

/*
The newGame function will return a valid new game object.
*/
export const newGame = () => ({
  status: 'plr1',
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  active: true,
  moves: 0,
  line: []
});

/*
The makeMove function should be called with...
- game: A valid game object
- pos: A number 0-8 corresponding to where we want to play

It will return a new game object. If the move was invalid
(because the pos was already taken or the game is over),
an unchanged game will be returned.
*/

export const makeMove = (gameS, pos) => {
  // ...to be implemented!
  console.log("makeMove")

  if (gameS.board[pos] === 0 && gameS.active) {

    let gamegameS = {
      status: gameS.status,
      board: gameS.board,
      active: gameS.active,
      moves: gameS.moves,
      line: gameS.line
    };

    let playerTurn = gamegameS.status === 'plr1' ? 1 : 2;
    let tileId = document.getElementById(pos);


    tileId.innerText = playerTurn === 1 ? 'X' : 'O';
    gamegameS.board[pos] = playerTurn;
    gamegameS.moves++;
    gamegameS['status'] = gamegameS.status === 'plr1' ? 'plr2' : 'plr1';

    let result = checkWinner(gamegameS);

    if (result.winner === 1) {
      gamegameS['active'] = false;
      gamegameS['status'] = 'plr1won';
      gamegameS['line'] = result.line;
    } else if (result.winner === 2) {
      gamegameS['active'] = false;
      gamegameS['status'] = 'plr2won';
      gamegameS['line'] = result.line;
    } else if (gamegameS.moves === 9) {
      gamegameS['active'] = false;
      gamegameS['status'] = 'draw';
    }

    let updateGame = Object.assign(gamegameS, {
      status: gamegameS.status,
      board: gamegameS.board,
      moves: gamegameS.moves,
      active: gamegameS.active,
      line: gamegameS.line,
    });

    return updateGame
  }
  return null
}

function checkWinner(gameState) {
  console.log("checkWinner")
  let winnerInfo = {
    line: []
    //winner: winner = this.props.winner && <h1>Winner is: {this.props.winner}</h1>
  }

  let winMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let winBoard = gameState.board;
  for (let i = 0; i < winMoves.length; i++) {

//  const [a, b, c] = lines[i];

      if (winBoard[winMoves[i][0]] === winBoard[winMoves[i][1]] && winBoard[winMoves[i][1]] === winBoard[winMoves[i][2]]) {
      return gameState;
    }
  }
  return winnerInfo
}
