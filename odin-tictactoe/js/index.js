//Gameboard
const gameboard = (function () {
  let board = Array(9).fill(null);

  function getBoard() {
    return board;
  }

  function setCell(index, token) {
    if (!board[index]) board[index] = token;
  }

  function resetCell() {
    board = Array(9).fill(null);
  }

  return { getBoard, setCell, resetCell };
})();

//Player Objects
function createPlayer(name, token) {
  let score = 0;

  function getPlayerName() {
    return name;
  }
  function getPlayerToken() {
    return token;
  }

  function addPlayerScore() {
    return score++;
  }
  function getPlayerScore() {
    return score;
  }
  return { getPlayerName, getPlayerToken, addPlayerScore, getPlayerScore };
}

//Game Starter Form
const formEl = document.querySelector("form");
const gameInterface = document.querySelector(".game__interface");
const gameStarter = document.querySelector(".game__starter");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  //Input Elements
  const firstPlayer = document.getElementById("player1Name").value.trim();
  const secondPlayer = document.getElementById("player2Name").value.trim();

  if ((firstPlayer, secondPlayer)) {
    formEl.reset();

    gameStarter.style.display = "none";

    //Game started
    createGame.start(firstPlayer, secondPlayer);
    gameInterface.style.display = "block";
  }
});

//Game Controller
const displayController = (function () {
  //Player Elements
  const playerTurn = document.querySelector(".player-turn");
  const boardEl = document.querySelector(".board__grid");

  function showMessage(msg) {
    playerTurn.textContent = msg;
  }

  function renderBoard(board, handleCellClick) {
    boardEl.innerHTML = "";
    board.forEach((cell, index) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.textContent = cell;
      cellDiv.dataset.index = index;

      if (cell == "X") {
        cellDiv.style.color = "#fbd459";
      } else if (cell == "O") {
        cellDiv.style.color = "#ffffff";
      }

      if (!cell) {
        cellDiv.addEventListener("click", () => handleCellClick(index));
      }
      boardEl.appendChild(cellDiv);
    });
  }
  function renderPlayerDetails(player1, player2, draws, currentRound) {
    const nameEls = document.querySelectorAll(".player-col__name");
    const roundEl = document.querySelector(".player-col__num");
    const drawEl = document.querySelector(".player-col__draw span");
    const p1Wins = document.querySelector(".player-col__one button span");
    const p2Wins = document.querySelector(".player-col__three button span");

    if (nameEls.length == 2) {
      nameEls[0].textContent = player1.getPlayerName();
      nameEls[1].textContent = player2.getPlayerName();
      // console.log(a,b)
    }
    roundEl.textContent = currentRound;
    drawEl.textContent = `${draws} Times`;
    p1Wins.textContent = player1.getPlayerScore();
    p2Wins.textContent = player2.getPlayerScore();
  }

  return { showMessage, renderPlayerDetails, renderBoard };
})();

//Create Game
let player1, player2, curPlayer;
let gameActive = false;
let draws = 0;
let currentRound = 1;
const createGame = (function () {
  function start(firstPlayer, secondPlayer) {
    player1 = createPlayer(firstPlayer, "X");
    player2 = createPlayer(secondPlayer, "O");
    curPlayer = player1;
    gameActive = true;
    displayController.renderBoard(gameboard.getBoard(), playMove);
    displayController.showMessage(`${curPlayer.getPlayerName()}'s turn`);
    displayController.renderPlayerDetails(
      player1,
      player2,
      draws,
      currentRound
    );
  }

  function playMove(index) {
    if (!gameActive) return;
    let board = gameboard.getBoard();
    if (board[index]) return;
    gameboard.setCell(index, curPlayer.getPlayerToken());
    displayController.renderBoard(board, playMove);

    if (checkWin(board, curPlayer.getPlayerToken())) {
      curPlayer.addPlayerScore();
      displayController.showMessage(`${curPlayer.getPlayerName()}'s Wins 🏆`);
      currentRound++;
      displayController.renderPlayerDetails(
        player1,
        player2,
        draws,
        currentRound
      );
      gameActive = false;
    } else if (board.every((cell) => cell)) {
      gameActive = false;
      displayController.showMessage("it's a draw! 🤝");
    } else {
      curPlayer = curPlayer === player1 ? player2 : player1;
      displayController.showMessage(`${curPlayer.getPlayerName()}'s turn`);
    }
  }

  function checkWin(board, token) {
    const winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winCombos.some((combo) => combo.every((i) => board[i] === token));
  }

  return { start };
})();
