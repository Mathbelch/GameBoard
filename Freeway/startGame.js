let start = 'start';
let end = "Well Done! Reload the page to play again!";

function showButton() {
   textAlign(CENTER);
   textSize(100);
   fill(220,20,60);
   text(start, width/2, height/2);
}

function  mouseClicked() {
   start = '';
   baseSong.loop();
}

function endGame() {
   textAlign(CENTER);
   textSize(25);
   fill(220,20,60);
   text(end, width/2, height/2);
   exit();
}