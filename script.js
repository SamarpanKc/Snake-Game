const board = document.getElementById("board");
const filler = board.getContext("2d");

const sqr = 40;
const box = 40;

const snake = [
  { x: 5 * box, y: 5 * box },
  { x: 6 * box, y: 5 * box },
];

let direction = "LEFT";
let game;

function updating() {
  const head = { ...snake[0] }; //naya tauko to add infront of the changed position

  if (direction === "LEFT") head.x -= sqr;
  if (direction === "UP") head.y -= sqr;
  if (direction === "RIGHT") head.x += sqr;
  if (direction === "DOWN") head.y += sqr;

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

game = setInterval(loop, 100);
document.addEventListener("keydown", movement);
