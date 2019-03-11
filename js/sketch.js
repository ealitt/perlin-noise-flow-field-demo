var xoff = 0;
var yoff = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);

  let x = 0;
}

function draw(){
  // background(0);

  var x = map(noise(xoff), 0, 1, 0, width);
  var y = map(noise(yoff), 0, 1, 0, height);

  xoff += 0.03;
  yoff -= 0.04;

  ellipse(x, y, 50, 50);

}

function mousePressed(){
  background(0);
}
