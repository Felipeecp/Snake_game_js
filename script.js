let canvas = document.getElementById("snake")
let context = canvas.getContext("2d") //renderiza o desenho do canvas
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
} //tamanho da cobrinha

let direction = "right";



function createBG(){
    context.fillStyle = 'lightgreen'; 
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o campo do jogo, recebendo quatro parametros (posição x, posição y, altura, largura)
} //função para criar o background

function createSnake(){
    for (i=0; i < snake.length; i++){
        context.fillStyle = "darkred" //cor da cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box) //desenha a cobrinha
    }
}

function iniciarJogo(){
    createBG();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; //se a direção for igual a right, sera adicionado a snakeX uma box
    if(direction == "left") snakeX -= box; //se a direção for igual a left, sera removido uma box de snakeX
    if(direction == "up") snakeY -= box; //se a direção for igual a up, sera removido uma box de snakeY 
    if(direction == "down") snakeY += box; //se a direção for igual a down, sera adicionado uma box a snakeX
    //esse conjunto de codigos fazem uma ilusão de movimento da cobrinha

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100); //intervalo de 100 milisegundos para a função iniciarJogo se renovar
