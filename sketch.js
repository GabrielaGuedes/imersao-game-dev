let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  frameRate(40);
  somDoJogo.loop();
  personagem = new Personagem(imagemPersonagem);
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
 
}


