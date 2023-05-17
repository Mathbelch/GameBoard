// Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

// Velocidade de movimento (quanto maior, mais dificil)
let velocidadeYBolinha = 6;
let velocidadeXBolinha = 6;

// Variáveis das raquetes:
let xRaqueteEsquerda = 5;
let yRaqueteEsquerda = 150;
let xRaqueteDireita = 585;
let yRaqueteDireita = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;
let velocidadeYRaqueteDireita;
let colide = false;

// Placar
let pontosEsquerda = 0;
let pontosDireita = 0;
let xPontosEsquerda = 150;
let yPontosEsquerda = 26;
let xPontosDireita = 450;
let yPontosDireita = 26;

// Sons:
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  mostraRaquete(xRaqueteEsquerda, yRaqueteEsquerda);
  mostraRaquete(xRaqueteDireita, yRaqueteDireita);
  movimentaRaqueteEsquerda();
  movimentaRaqueteDireita();
  //verificaColisaoRaquete();
  colisaoRaqueteBolinhaBiblioteca(xRaqueteEsquerda, yRaqueteEsquerda);
  colisaoRaqueteBolinhaBiblioteca(xRaqueteDireita, yRaqueteDireita);
  verificaColisaoBorda();
  incluiPlacar();
  atualizarPlacar();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function mostraRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaRaqueteEsquerda() {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteEsquerda -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteEsquerda += 10;
  }
}

function movimentaRaqueteDireita() {
  velocidadeYRaqueteDireita = yBolinha - yRaqueteDireita - comprimentoRaquete / 2 - 30;
  yRaqueteDireita += velocidadeYRaqueteDireita;
}

/*function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete &&  yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}*/

function colisaoRaqueteBolinhaBiblioteca(x, y) {
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoBorda() {
  if(xBolinha + raio >= width || xBolinha - raio <= 0) {
    velocidadeXBolinha *= -1;
  } 
  
  if(yBolinha + raio >= height || yBolinha - raio <= 0) {
    velocidadeYBolinha *= -1;
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(xPontosEsquerda - 20, 10, 40, 20);
  fill(255);
  text(pontosEsquerda, xPontosEsquerda, yPontosEsquerda);
  fill(color(255, 140, 0));
  rect(xPontosDireita - 20, 10, 40, 20);
  fill(255);
  text(pontosDireita, xPontosDireita, yPontosDireita);
}

function atualizarPlacar() {
  if (xBolinha > 590) {
    pontosEsquerda++;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosDireita++;
    ponto.play();
  }
}

alert("Use as setas do teclado para movimentar a raquete do lado esquerdo!")