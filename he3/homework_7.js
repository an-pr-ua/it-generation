const myObj = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF",
};

function exchange(obj) {
  const ex = {};
  var newKeys = Object.keys(obj);
  newKeys.forEach(function (value) {
    var newkey = obj[value];
    ex[newkey] = value;
  });
  return ex;
}

console.log(exchange(myObj));
