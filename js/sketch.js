var start = 0;
// var speed = 0.02;
var inc = 0.1;
var scl = 10;
var cols, rows;
var numParticles = 1500;

var time = 0;
var timeInc = 0.001;

var fr;

var particles = [];
var flowfield;

function setup(){
  createCanvas(windowWidth, windowHeight);
  // createCanvas(200, 200);
  cols = floor(width / scl);
  rows = floor(height / scl);

  fr = createP('');

  flowfield = new Array(rows * cols);

  for(var i = 0; i < numParticles; i++){
      particles[i] = new Particle();
  }
}

function draw(){
  background(255);

  var yoff = 0;

  for(var y = 0; y < rows; y++){
    var xoff = start;
    for(var x = 0; x < cols; x++){
      var index = x + y * cols;
      var angle = noise(xoff, yoff, time) * TWO_PI;
      var vect = p5.Vector.fromAngle(angle);
      vect.setMag(0.25);
      flowfield[index] = vect;

      xoff += inc;
      stroke(0, 50);
      push();
      translate(x * scl, y * scl);
      rotate(vect.heading());
      strokeWeight(1);
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;

    time += timeInc;
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].follow(flowfield);
    particles[i].edges();
    particles[i].update();
    particles[i].show();
  }
  fr.html(floor(frameRate()));
}
