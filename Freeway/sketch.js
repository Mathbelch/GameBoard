function setup() {
  createCanvas(550, 400);
}

function draw() {
  background(imageRoute);
  showActor();
  showCar();
  moveCar();
  moveActor();
  returnCarToInitialPosition()
}