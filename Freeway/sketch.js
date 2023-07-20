function setup() {
  createCanvas(550, 400);
}

function draw() {
  background(imageRoute);
  showActor();
  showCar();
  moveCar();
  moveActor();
  returnCarToInitialPosition();
  checkCollide();
  setActor();
  showButton();
}

alert('Help the cow to cross the route. Play start to begin the game.')