const a1 = [1, 5, -7, 0, 34, 4, 9, 12, -2];

function averages(numbers) {
  var averageNumbers = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    averageNumbers.push((numbers[i] + numbers[i + 1]) / 2);
  }
  return averageNumbers;
}

console.log(averages(a1));
