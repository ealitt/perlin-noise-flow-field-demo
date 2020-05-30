var inc = 0.1;
var scl = 80;
var cols, rows;

var time = 0;
var timeInc = 0.001;

var fl;
var pt;
var particles = [];

var flowfield;

p5.disableFriendlyErrors = true;

function guiSetup(){
  fl = new Flowfield();
  pt = new Particledata();       
  var gui = new dat.GUI();    // initialize dat gui
  // gui.add(fl, 'rgb');
  gui.add(fl, 'pause');
  gui.add(fl, 'numParticles', 10, 10000, 10).onChange(function(){generateParticles()});
  gui.add(fl, 'magnitude', 0, 1, 0.1);
  gui.add(fl, 'clear');
  var particleVals = gui.addFolder('Particle');
  particleVals.add(pt, 'maxSpeed', 1, 100, 1).onChange(function(){generateParticles()});
  particleVals.add(pt, 'opacity', 0, 200, 5).onChange(function(){generateParticles()});
  particleVals.add(pt, 'stroke', 0, 10, 1).onChange(function(){generateParticles()});
};

var Flowfield = function() {
  // this.rgb = false;
  this.pause = false;
  this.numParticles = 1000;
  this.magnitude = 0.7;
  this.clear = function(){background(0)};
}

var Particledata = function() {
  this.maxSpeed = 6;
  this.opacity = 20;
  this.stroke = 1;
}

function setup(){
  guiSetup();
  createCanvas(windowWidth, windowHeight);
  background(0);

  cols = floor(width / scl);
  rows = floor(height / scl);

  flowfield = new Array(rows * cols);
  generateParticles();
}

function generateParticles() {
  particles = [];
  for(var i = 0; i < fl.numParticles; i++){
    particles[i] = new Particle(pt.maxSpeed, pt.opacity, pt.stroke);
  }
}

function draw(){
  if(!fl.pause){
    var yoff = 0;

    for(var y = 0; y < rows; y++){
      var xoff = 0;
      for(var x = 0; x < cols; x++){
        var index = x + y * cols;
        var angle = noise(xoff, yoff, time) * 2 * TWO_PI;
        var vect = p5.Vector.fromAngle(angle);
        vect.setMag(fl.magnitude);
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
}

function keyPressed() {
  if(keyCode === 80){
    fl.pause = !fl.pause;
  }
}