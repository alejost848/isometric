var allPixels = [];

function setup() {
  var canvas = createCanvas(660, 660);
  canvas.parent('canvas');

  for (var i = 0; i < 33; i++) {
    for (var j = 0; j < 33; j++) {
      allPixels.push(new Pixel(i * 20, j * 20));
    }
  }
}

function draw() {
  for (var i=0; i<allPixels.length; i++) {
    allPixels[i].display();
  }
}

function Pixel(x, y) {
  var x = x;
  var y = y;

  this.display = function() {
    stroke(200);
    rect(x, y, 20, 20);
  };
}
