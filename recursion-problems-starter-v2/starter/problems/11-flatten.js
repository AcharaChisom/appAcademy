/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

const flatten = (arr, n = 0) => {
  if (n === arr.length) return []

  if (Array.isArray(arr[n])) {
    return flatten(arr[n]).concat(flatten(arr, n + 1))
  }

  return [arr[n]].concat(flatten(arr, n + 1))
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
