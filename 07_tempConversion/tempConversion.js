const ftoc = function(farenheit) {
  const temp = farenheit;

  const result = (temp - 32) * 0.5556;

  return Math.round(result * 10) / 10;
};

const ctof = function(celsius) {
  const temp = celsius;

  const result = (temp * 1.8) + 32;

  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
