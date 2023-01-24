var str =
  "gagah hakdiol, hjsopertm; adde, coroltn mas- jak: hert, (lulu), kret? lutik, hj. los!";
var n = 6;

function pickWordsLongerThan(str, n) {
  let arr = [];

  const words = str.replace(/[.,!?;:"()-]/g, "").split(" ");

  for (const word of words) {
    if (word.length > n) {
      arr.push(word);
    }
  }
  return arr;
}

console.log(pickWordsLongerThan(str, n));
