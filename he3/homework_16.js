var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function minForwardBackward(arr) {
  var arrResult = [];

  if (arr.length % 2 !== 0) {
    arrResult.push(arr.splice(arr.indexOf(Math.max(...arr)), 1));
  }
  while (arr.length > 0) {
    arrResult.push(arr.splice(arr.indexOf(Math.max(...arr)), 1));
    arrResult.unshift(arr.splice(arr.indexOf(Math.max(...arr)), 1));
  }
  return arrResult;
}
console.log(minForwardBackward(testArr));
