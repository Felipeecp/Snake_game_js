let canvas = document.getElementById("snake")
let context = canvas.getContext("2d") //renderiza o desenho do canvas
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
} //tamanho da cobrinha

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, //cria a comida em um local aleatorio em relação ao eixo x
    y: Math.floor(Math.random() * 15 + 1) * box //cria a comida em um local aleatorio em relação ao eixo y
}


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

function createFood(){
    context.fillStyle = "green"
    context.fillRect(food.x,food.y,box,box);
}


document.addEventListener("keydown", update); //pega o keydown(evento de clique) e chama o update

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left"
    if(event.keyCode == 38 && direction != "down") direction = "up"
    if(event.keyCode == 39 && direction != "left") direction = "right"
    if(event.keyCode == 40 && direction != "up") direction = "down" 
}

function iniciarJogo(){

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0 //se a posição da cobra for maior que
    //o tamanho do background na direção direita, a cobra reaparece no lado esquerdo
    
    if(snake[0].x < 0 && direction == "left")snake[0].x = 16 * box //se a posição da cobra for maior que
    //o tamanho do background na direção esquerda, a cobra reaparece no lado direito
    
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0 //se a posição da cobra for maior que
    //o tamanho do background para baixo, a cobra reaparece em cima.
    
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16*box //se a posição da cobra for maior que
    //o tamanho do backgroun para cima, a cobra reaparece em baixo
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }


    createBG();
    createSnake();
    createFood();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; //se a direção for igual a right, sera adicionado a snakeX uma box
    if(direction == "left") snakeX -= box; //se a direção for igual a left, sera removido uma box de snakeX
    if(direction == "up") snakeY -= box; //se a direção for igual a up, sera removido uma box de snakeY 
    if(direction == "down") snakeY += box; //se a direção for igual a down, sera adicionado uma box a snakeX
    //esse conjunto de codigos fazem uma ilusão de movimento da cobrinha

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box 
        food.y = Math.floor(Math.random() * 15 + 1) * box 
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //metodo unshift sempre acrecenta 1 no primeiro elemento

}

let jogo = setInterval(iniciarJogo, 100); //intervalo de 100 milisegundos para a função iniciarJogo se renovar
