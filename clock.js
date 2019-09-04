function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0,0,0)
  circle(200, 200, 300)
  s = map(second(), 0, 60, 0.001, 2*PI/3)
  m = map(minute(), 0, 60, 0.001, 2*PI/3)
  h = map(hour(), 0, 24, 0.001, 2*PI/3)
  fill(500, 0, 0)
  arc(200, 200, 300, 300, 0, s)
  fill(0)
  arc(200, 200, 200, 200, 0, s)
  fill(0, 500, 0)
  arc(200, 200, 200, 200, 2*PI/3, 2*PI/3 + m)
  fill(0)
  arc(200, 200, 100, 100, 2*PI/3, 2*PI/3 + m)
  fill(0, 0, 500)
  arc(200, 200, 100, 100, 4*PI/3, 4*PI/3 + h)
}