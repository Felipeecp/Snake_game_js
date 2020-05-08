let canvas = document.getElementById("snake")
let context = canvas.getContext("2d") //renderiza o desenho do canvas
let box = 32;

function createBG(){
    context.fillStyle = 'lightgreen'; 
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o campo do jogo, recebendo quatro parametros (posição x, posição y, altura, largura)
} //função para criar o background

createBG()
