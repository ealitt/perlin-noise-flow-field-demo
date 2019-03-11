var inc = 0.1;
var scl = 10;
var cols, rows;
var numParticles = 2000;

var time = 0;
var timeInc = 0.001;

var fr;

var particles = [];
var flowfield;

var mag = 0.5;

function setup(){
  background(255);
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowfield = new Array(rows * cols);

  for(var i = 0; i < numParticles; i++){
      particles[i] = new Particle();
  }
}

function draw(){
  var yoff = 0;

  for(var y = 0; y < rows; y++){
    var xoff = 0;
    for(var x = 0; x < cols; x++){
      var index = x + y * cols;
      var angle = noise(xoff, yoff, time) * 2 * TWO_PI;
      var vect = p5.Vector.fromAngle(angle);
      vect.setMag(mag);
      flowfield[index] = vect;

      xoff += inc;
    }
    yoff += inc;

    time += timeInc;
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}
