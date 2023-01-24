const arra1 = ["a", "b", "c", 3, 12, 36, 40, 5, 12, 9];
const arra2 = ["d", "e", "f", 3, 8, 5, 36];

// homework 6
const getUnique = (arr1, arr2) => {
  const arr = arr1.concat(arr2);
  return arr.filter((el, ind) => ind === arr.indexOf(el));
};

console.log(getUnique(arra1, arra2));
