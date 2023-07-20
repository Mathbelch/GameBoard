let xCar1 = 550;
let yCar1 = 40;
let stepCar1 = 2;

let xCar2 = 550;
let yCar2 = 96;
let stepCar2 = 3;

let xCar3 = 550;
let yCar3 = 150;
let stepCar3 = 2.5;



function showCar() {
   image(imageCar1, xCar1, yCar1, 50, 40);
   image(imageCar2, xCar2, yCar2, 50, 40);
   image(imageCar3, xCar3, yCar3, 50, 40);
 }
 
 function moveCar() {
   xCar1 -= stepCar1;
   xCar2 -= stepCar2;
   xCar3 -= stepCar3;
 }

 function returnCarToInitialPosition() {
   if (xCar1 < -50) {
      xCar1 = 550;
   }
   if (xCar2 < -50) {
      xCar2 = 550;
   }
   if (xCar3 < -50) {
      xCar3 = 550;
   }
 }