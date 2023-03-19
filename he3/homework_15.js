const UPPERCASE_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const LOWERCASE_LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const UNDERSCORE = ['_'];

const ALL_CHARS = [UPPERCASE_LETTERS, LOWERCASE_LETTERS, DIGITS, UNDERSCORE];
const WITHOUT_UNDERSCORE = [UPPERCASE_LETTERS, LOWERCASE_LETTERS, DIGITS];
const WITHOUT_NUMBERS = [UPPERCASE_LETTERS, LOWERCASE_LETTERS, UNDERSCORE];
const ALL_LETTERS = [UPPERCASE_LETTERS, LOWERCASE_LETTERS];


function generateChar(arr) {
	if (arr.length === 1) {
  	if (arr[0].length === 1) {
    	return '_';
    }
  }
  const index = Math.floor(Math.random()  * arr.length);
  const chars = arr[index];
  const innerIndex = Math.floor(Math.random() * chars.length);
  return chars[innerIndex];
}

function chooseSelection(numberCount, hasUnderscore) {
	if (hasUnderscore && numberCount === 5) {
  	return ALL_LETTERS;
  } else if (hasUnderscore) {
  	return WITHOUT_UNDERSCORE;
  } else if (numberCount === 5) {
  	return WITHOUT_NUMBERS;
  }
  return ALL_CHARS;
}

function generatePassword() {
	const pwd = [];
	const pwdLength = Math.floor(Math.random() * 15) + 6;
  var upperCount, numberCount, hasUnderscore;
  upperCount = numberCount = hasUnderscore = 0;
  
  while (pwd.length !== pwdLength) {
    var selection = chooseSelection(numberCount, hasUnderscore);
    if (pwd.length === pwdLength - 3 + hasUnderscore + upperCount) {
    	selection = [];
    	if (!hasUnderscore)
      	selection.push(UNDERSCORE);
      if (upperCount < 2)
      	selection.push(UPPERCASE_LETTERS);
    }
    const char = generateChar(selection);
    if (typeof char === "number") {
    	if (typeof pwd.at(-1) === "number")
      	continue;
      numberCount++;
    	pwd.push(char);
  	}	 else if (UPPERCASE_LETTERS.includes(char)) {
    	upperCount < 2 ? upperCount++ : null;
    	pwd.push(char);
    } else if (char == "_") {
    	hasUnderscore++;
    	pwd.push(char);
    } else
    	pwd.push(char);
	}
  return pwd.join("");
}
console.log(generatePassword());



