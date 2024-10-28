const board = document.getElementById("board");
const filler = board.getContext("2d");

const sqr = 20;
const box = 20;

const snake = [
  { x: 5 * box, y: 5 * box },
  { x: 6 * box, y: 5 * box },
];

let direction = "RIGHT";
let game;
let isGameOver = false;

function updating() {
  const head = { ...snake[0] }; //naya tauko to add infront of the changed position

  if (direction === "LEFT") head.x -= sqr;
  if (direction === "UP") head.y -= sqr;
  if (direction === "RIGHT") head.x += sqr;
  if (direction === "DOWN") head.y += sqr;

  function isOutOfBounds(position) {
    return (
      position.x < 0 ||
      position.x >= board.width ||
      position.y < 0 ||
      position.y >= board.height
    );
  }

  if (isOutOfBounds(head)) {
    gameOver();
    return;
  }
  snake.unshift(head); //naya tauko chaged posion ma jodeko
  snake.pop();
}

function movement(event) {
  if (event.key === "ArrowUp" || event.key === "W" || event.key === "w") {
    // direction !== "Down" doesn't work , curerntly no solutions
    direction = "UP";
  } else if (
    event.key === "ArrowDown" ||
    event.key === "s" ||
    event.key === "S"
  ) {
    direction = "DOWN";
  } else if (
    event.key === "ArrowLeft" ||
    event.key === "a" ||
    event.key === "A"
  ) {
    direction = "LEFT";
  } else if (
    event.key === "ArrowRight" ||
    event.key === "d" ||
    event.key === "D"
  ) {
    direction = "RIGHT";
  }
}

function drawing() {
  filler.clearRect(0, 0, board.width, board.height); // Clear canvas

  for (let i = 0; i < snake.length; i++) {
    filler.fillStyle = i === 0 ? "black" : "white";
    filler.fillRect(snake[i].x, snake[i].y, sqr, sqr);
  }
}

function loop() {
  updating();
  drawing();
}

function gameOver() {
  clearInterval(game);
  isGameOver = true;
  document.getElementById("message").textContent = "GAME OVER";
  document.getElementById("btnRestart").style.display = "block"; // Show restart button
  document.getElementById("btnRestart").style.opacity = "1";
  //   document.getElementById("btn").style.opacity = "1"; // Show start button again
}
//////////////////////////////////////

function startGame() {
  if (isGameOver) {
    // Reset game state
    snake.length = 2;
    snake[0] = { x: 5 * box, y: 5 * box };
    snake[1] = { x: 6 * box, y: 5 * box };
    direction = "LEFT";
    isGameOver = false;
    document.getElementById("message").textContent = "";
  }
  document.getElementById("btn").style.display = "none";
  document.getElementById("btn").style.opacity = "0"; // Hide start button
  game = setInterval(loop, 200);
  document.addEventListener("keydown", movement);
}

const btnRestart = document.getElementById("btnRestart");

btnRestart.addEventListener("click", () => {
  btnRestart.style.opacity = "0";
  startGame();
});
