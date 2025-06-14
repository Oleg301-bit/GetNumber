'use strict';

function getNumber(number) {
  function calculateSteps(currentNumber = 1, step = '1') {
    if (number === currentNumber) {
      return step;
    }
    if (number < currentNumber) {
      return null;
    }
    return (
      calculateSteps(currentNumber * 3, `${step} * 3`) ||
      calculateSteps(currentNumber + 5, `${step} + 5`)
    );
  }
  return calculateSteps();
}

console.log(getNumber(13));
console.log(getNumber(-2));
console.log(getNumber(1));
console.log(getNumber(7));
console.log(getNumber(8));
console.log(getNumber(0));
