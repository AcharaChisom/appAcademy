function getBiggest(x, y) {
  return Math.max(x, y);
}

function multiplyBiggerNumByTwo(num1, num2) {
  return getBiggest(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return getBiggest(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${getBiggest(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${getBiggest(weight1, weight2) === weight1 ? weight2 : weight1} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};