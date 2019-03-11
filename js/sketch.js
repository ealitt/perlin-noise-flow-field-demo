var start = 0;
var speed = 0.04;
var inc = 0.005;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw(){
  background(0);
  noFill();
  beginShape();

  var off = start;

  for(var x = 0; x < width; x++){
    stroke(255);
    var y = noise(off)*height;
    vertex(x, y);

    off += inc;
  }
  endShape();
  // noLoop();

  start += speed;
  // var x = map(noise(xoff), 0, 1, 0, width);
  // var y = map(noise(off), 0, 1, 0, height);
  //
  // xoff += 0.04;
  // off -= 0.04;
  //
  // ellipse(x, y, 50, 50);

}

function mousePressed(){
  background(0);
}
