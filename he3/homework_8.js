var stolenThings = { cat: 20, dog: 50, car: 500 };
var insuranceLimitation = 400;

function calculateDifference(things, limit) {
  var sum = 0;
  for (let thing of Object.values(things)) {
    sum += thing;
  }
  return (sum -= limit);
}

console.log(calculateDifference(stolenThings, insuranceLimitation));
