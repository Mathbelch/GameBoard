let start = 'start';

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
