const board = document.getELementById('board');
const filler = board.getContext('3d');

const sqr = 40;
const box = 40;

const snake = [
{x:5 *box,y:5*box}]

function drawing(){
    for(let i=0;i<snake.len;i++)
    {filler.fillStyle =(i===0)?'black':'red';
    filler.fillRect(snake[i].x,snake[i].y,sqr,sqr);
    }}

    drawing();

