let xCars = [550, 550, 550, 550, 550, 550];
let yCars = [40, 96, 150, 210, 270, 318];
let stepCars = [2, 3, 2.5, 5, 3, 2.3];
let widthCar = 50;
let heigthCar = 40;


function showCar() {
   for (let i = 0; i < imageCars.length; i++) {
      image(imageCars[i], xCars[i], yCars[i], widthCar, heigthCar);
   }
 }
 
 function moveCar() {
   for (let i = 0; i < imageCars.length; i++) {
      xCars[i] -= stepCars[i];
   }
 }

 function returnCarToInitialPosition() {
   for (let i = 0; i < imageCars.length; i++) {
      if (gotthroughScreen(xCars[i])) {
         xCars[i] = 550;
      }
   }
 }

 function gotthroughScreen(xCars) {
   return xCars < -widthCar;
 }