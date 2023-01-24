var arrmain = [
  2, 12, 16, -2, 36, 82, 15, -8, -39, -136, 564, 322, 415, 10, 264, 186,
];

function solution12(arrMain) {
  var arrSubtraction = [];
  var arrFirst = [];
  var arrSecond = [];

  arrMain.sort((a, b) => a - b);

  while (arrMain.length > 0) {
    for (let i = 0; i < arrMain.length - 1; i++) {
      const element = arrMain[i + 1] - arrMain[i];
      arrSubtraction.push(element);
    }

    var index = arrSubtraction.indexOf(Math.min(...arrSubtraction));

    arrFirst.push(...arrMain.splice(index, 1));
    arrSecond.push(...arrMain.splice(index, 1));
    arrSubtraction = [];
  }

  return { b: arrFirst, c: arrSecond };
}

console.log(solution12(arrmain));
