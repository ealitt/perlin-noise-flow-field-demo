var xoff = 0;
var yoff = 100000;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw(){
  // background(0);

  for(var x = 0; x < width; x++){
    stroke(255);
    point(x, random(height));
  }

  // var x = map(noise(xoff), 0, 1, 0, width);
  // var y = map(noise(yoff), 0, 1, 0, height);
  //
  // xoff += 0.04;
  // yoff -= 0.04;
  //
  // ellipse(x, y, 50, 50);

}

function mousePressed(){
  background(0);
}
