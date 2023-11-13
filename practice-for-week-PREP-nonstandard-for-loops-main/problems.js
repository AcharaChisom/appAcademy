function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    return arr.filter((el, i) => i % 2 !== 0);
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    return arr.filter((el, i) => i % 2 !== 0).reverse();
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    return arr.filter((el, i) => Math.log2(i) % 1 === 0);
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    return arr.filter((el, i) => Math.log(i) / Math.log(n) % 1 === 0);
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    return arr.slice(0, Math.ceil(arr.length / 2));
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    return arr.slice(Math.ceil(arr.length / 2));
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}