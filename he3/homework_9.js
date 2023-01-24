var bricksize_a = 1;
var bricksize_b = 2;
var bricksize_c = 2;

function doesBrickFit(a, b, c, holeA, holeB) {
  var brick = [a, b, c];

  var hole = [holeA, holeB];
  brick.sort((a, b) => a - b).pop();
  hole.sort((a, b) => a - b);

  if (brick[0] <= hole[0] && brick[1] <= hole[1]) {
    return true;
  }
  return false;
}

console.log(doesBrickFit(bricksize_a, bricksize_b, bricksize_c, 1, 1));
