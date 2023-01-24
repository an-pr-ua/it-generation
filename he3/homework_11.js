var str10 = "Hello world home car ";
var str11 = "car dog Hello world home ";

function cyclicLineShift(a, b) {
  var strex = a.length > b.length ? a : b;
  var stret = a.length > b.length ? b : a;

  for (let i = 0; i < strex.length; i++) {
    if (strex.includes(stret)) {
      return true;
    } else {
      var strpr = strex.substring(0, 1);
      var strpr1 = strex.substring(1, strex.length);
      strex = strpr1.concat(strpr);
    }
  }
  return false;
}

console.log(cyclicLineShift(str10, str11));
