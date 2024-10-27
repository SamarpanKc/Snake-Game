const board = document.getElementById("board");
const filler = board.getContext("2d");

const sqr = 40;
const box = 40;

const snake = [
  { x: 5 * box, y: 5 * box },
  { x: 6 * box, y: 5 * box },
];

function drawing() {
  for (let i = 0; i < snake.length; i++) {
    filler.fillStyle = i === 0 ? "black" : "white";
    filler.fillRect(snake[i].x, snake[i].y, sqr, sqr);
  }
}

drawing();