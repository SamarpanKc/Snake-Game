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

function drawing() {
  filler.clearRect(0, 0, board.width, board.height); // Clear canvas

  for (let i = 0; i < snake.length; i++) {
    filler.fillStyle = i === 0 ? "black" : "white";
    filler.fillRect(snake[i].x, snake[i].y, sqr, sqr);
  }
}

drawing();