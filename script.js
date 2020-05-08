let canvas = document.getElementById("snake")
let context = canvas.getContext("2d") //renderiza o desenho do canvas
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
} //tamanho da cobrinha


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


createBG()
createSnake()