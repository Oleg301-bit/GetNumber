'use strict';

function getNumber(n, alwaysFirstNumber = 1, step = '1') {
  if (alwaysFirstNumber === n) {
    return step;
  } else if (n < alwaysFirstNumber) {
    return null;
  }
  const addStep = getNumber(n, alwaysFirstNumber + 5, `${step} + 5`);
  if (addStep) {
    return addStep;
  }
  const multiplyStep = getNumber(n, alwaysFirstNumber * 3, `${step} * 3`);
  if (multiplyStep) {
    return multiplyStep;
  }

  return null;
}

console.log(getNumber(13));
console.log(getNumber(-2));
console.log(getNumber(1));
console.log(getNumber(7));
console.log(getNumber(8));

