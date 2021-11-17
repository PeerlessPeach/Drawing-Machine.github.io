let array = [];

backgroundColor=255;
function setup() {
  createCanvas(600, 600);
  background(255);

  strokeWeight(5);
  stroke(0);
  noFill();
}

function draw() {

if (mouseIsPressed){
 backgroundColor -= 3;
 background(backgroundColor);
 line(mouseX, mouseY, pmouseX, pmouseY);
 array.push([mouseX,  mouseY]);

}

}

 function keyTyped(){


   if (key ==='s'){
// save this image
saveCanvas('fileName', 'png');
} else if (key === 'd'){
  //display image

background(255);
beginShape();
for(let i = 0; i < array.length; i++){
  line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  curveVertex(array[i][0], array[i][1])
}
endShape();

}

   return false;
 }
