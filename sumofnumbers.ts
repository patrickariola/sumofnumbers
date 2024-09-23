function sumFor(numbers: number[]): number {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }
  return total;
}

function sumWhile(numbers: number[]): number {
  let total = 0;
  let index = 0;
  while (index < numbers.length) {
    total += numbers[index];
    index++;
  }
  return total;
}

function sumRecursion(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  const currentSum = numbers[0] + sumRecursion(numbers.slice(1));
  return currentSum;
}

function sumTheFunctionalWay(numbers: number[]): number {
  const total = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
  }, 0);
  return total;
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
