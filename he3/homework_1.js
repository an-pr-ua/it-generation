const arr1 = [1, 5, 12, 31];

function maxDiff(arr) {
    if (arr.length > 1) {
      let a = Math.min(...arr);
      let b = Math.max(...arr);
      return b - a;
    } else {
    	return 0;
    }
}

console.log(maxDiff(arr1));