var searchline = "C://Users/ser/Desktop/IT_Generation/lesson1/kutrep1.html";

function fileNameSearch(path) {
  const newstr = path.replace(/['/:_]/g, " ");
  const splits = newstr.split(" ");

  const nameWithExtension = splits.pop();

  var element = nameWithExtension.indexOf(".");
  return nameWithExtension.slice(0, element);
}

console.log(fileNameSearch(searchline));