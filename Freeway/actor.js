let yActor = 370;
let xActor = 100;
let stepActor = 2;
let collide = false;

function showActor() {
   image(imageActor, xActor, yActor, 25, 25);
 }

 function moveActor() {
   if (keyIsDown(UP_ARROW)) {
     yActor -= stepActor;
   }
 
   if (keyIsDown(DOWN_ARROW)) {
     yActor += stepActor;
   }
 }

 function checkCollide() {
  for (let i = 0; i < imageCars.length; i++) {
    collide = collideRectCircle(xCars[i], yCars[i], widthCar, heigthCar, xActor, yActor, 15);
    if (collide) {
      collided();
    } 
  }
 }

 function collided() {
  yActor = 366;
 }