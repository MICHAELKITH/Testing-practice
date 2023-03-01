const calculator = {
  add: (a, b) => {
    return a + b;
  },
  substract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return b == 0 ? null : a / b;
  },
};

export default calculator;
