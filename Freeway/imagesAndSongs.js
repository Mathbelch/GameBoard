let imageRoute;
let imageActor1;
let imageActor2;
let imageActor3;
let imageActor4;
let imageCar1;
let imageCar2;
let imageCar3;
let imageCars;
let imageActors;

let baseSong;
let collideSong;
let pointSong;

function preload() {
   imageRoute = loadImage('images/route.png');
   imageActor1 = loadImage('images/actor-1.png');
   imageActor2 = loadImage('images/actor-2.png');
   imageActor3 = loadImage('images/actor-3.png');
   imageActor4 = loadImage('images/actor-4.png');
   imageCar1 = loadImage('images/car-1.png');
   imageCar2 = loadImage('images/car-2.png');
   imageCar3 = loadImage('images/car-3.png');
   imageCars = [imageCar1, imageCar2, imageCar3, imageCar1, imageCar2, imageCar3];
   imageActors = [imageActor1, imageActor2, imageActor3, imageActor4];
   
   baseSong = loadSound('songs/base.mp3');
   collideSong = loadSound('songs/collide.mp3');
   pointSong = loadSound('songs/points.wav');
 }