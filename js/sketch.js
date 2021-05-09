let scl = 100;
let maxDiam = 30;
let xOffset = 60;
let yOffset = 50;
let freq = 1;
let speed = 40;

let col = []

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);

  cols = floor(width / scl);
  rows = floor(height / scl);
  console.log(cols);
  console.log(rows);
  console.log(windowWidth);

  col = [random(0, 255), random(0, 255), random(0, 255)];
}

function draw(){  
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      posX = i * scl + xOffset;
      posY = j * scl + yOffset;
      fill(col[0] * sin(posX) + 100, col[1] * sin(frameCount/100 + posX/2), col[2] * sin(frameCount/101) + posX/3);
      // let multiplier = map(posX, 0, windowWidth, 0, 1);
      let multiplier = sin((posY+posX)/freq + frameCount/speed);
      circle(posX, posY, maxDiam*multiplier);
    }
  }  
}
