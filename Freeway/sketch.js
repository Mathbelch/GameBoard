let imageRoute;
let imageActor;
let imageCar;

let xCar = 500;
let yActor = 370;
let step = 2;

function preload() {
  imageRoute = loadImage('images/route.png');
  imageActor = loadImage('images/actor-1.png');
  imageCar = loadImage('images/car-1.png');
}

function setup() {
  createCanvas(550, 400);
}

function draw() {
  background(imageRoute);
  showActor();
  showCar();
  moveCar();
  moveActor();
}

function showActor() {
  image(imageActor, 100, yActor, 25, 25);
}

function showCar() {
  image(imageCar, xCar, 40, 50, 40);
}

function moveCar() {
  xCar -= 2;
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= step;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yActor += step;
  }
}