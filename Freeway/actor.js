let xActors = [100, 200, 300, 400];
let yActors = [370, 367, 367, 368];
let stepActors = [1.5, 1, 2.5, 3];
let collide = false;
let indice = 0;

function showActor() {
   image(imageActors[0], xActors[0], yActors[0], 25, 25);
   image(imageActors[1], xActors[1], yActors[1], 30, 30);
   image(imageActors[2], xActors[2], yActors[2], 30, 30);
   image(imageActors[3], xActors[3], yActors[3], 30, 30);
 }

 function moveActor() {
   if (keyIsDown(UP_ARROW)) {
     yActors[indice] -= stepActors[indice];
   }
 
   if (keyIsDown(DOWN_ARROW) && yActors[indice] < 370) {
     yActors[indice] += stepActors[indice];
   }
 }

 function checkCollide() {
  for (let i = 0; i < imageCars.length; i++) {
    collide = collideRectCircle(xCars[i], yCars[i], widthCar, heigthCar, xActors[indice], yActors[indice], 0.1);
    if (collide) {
      collideSong.play();
      returnToInitialPosition();
    } 
  }
 }

 function returnToInitialPosition() {
  yActors[indice] = 366;
 }

 function setActor() {
  if (yActors[indice] < 10) {
    pointSong.play();
    if (indice < imageActors.length - 1) {
      indice += 1;
    } else {
      alert('Well Done');
    }  
  }
 }
