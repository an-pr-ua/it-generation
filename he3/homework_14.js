var str12 = "(ghj) (kkk(jj (as)))";

function check(str) {
  var count = 0;
  for (var el of str) {
    if (el === "(") {
      count++;
    } else if (el == ")") {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0 ? true : false;
}

console.log(check(str12));
