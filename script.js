const board = document.getElementById("board");
const filler = board.getContext("2d");

const sqr = 40;
const box = 40;


const snake = [
  { x: 5 * box, y: 5 * box },
  { x: 6 * box, y: 5 * box },
  { x: 7 * box, y: 5 * box },
  { x: 8 * box, y: 5 * box },
  { x: 9 * box, y: 5 * box },
  { x: 10 * box, y: 5 * box },
];

function drawing() {
    for (let i = 0; i < snake.length; i++) {
      if (i === 0) {
        // Head of the snake
        filler.fillStyle = "#201a23";
      } else {
        // Alternate body colors: white and gray
        filler.fillStyle = i % 2 === 0 ? "#e9e9e9" : "white";
      }
      filler.fillRect(snake[i].x, snake[i].y, sqr, sqr);
    }
  }
  
drawing();