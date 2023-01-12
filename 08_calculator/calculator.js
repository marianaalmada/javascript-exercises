const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let suma = 0;
  for (const i of array) {
    suma += i;
  }

  return suma;
};

const multiply = function(array) {
  let suma = 1;
  for (const i of array) {
    suma = suma * i;
  }

  return suma;
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
  if(num < 0) {
    return -1;
  } else if(num === 0 || num === 1) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
