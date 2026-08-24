function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

const result = calculate(5, 3, add);

console.log(result);