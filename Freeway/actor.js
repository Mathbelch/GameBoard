let yActor = 370;
let xActor = 100;
let stepActor = 2;

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