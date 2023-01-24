const str5 = "Celebration";
var str5_1 = "Babushka abcde";

function countVowels(str) {
  var arr = str.match(/[aeiou]/gi);
  return arr ? arr.length : null;
}

console.log(countVowels(str5));

function removeABC(str) {
  var withoutABC = str.replace(/[abc]/gi, "");
  return withoutABC === str ? null : withoutABC;
}

console.log(removeABC(str5_1));
