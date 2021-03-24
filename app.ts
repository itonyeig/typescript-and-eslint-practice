function combine(input1: number | string, input2: number | string, resultConversion: string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === 'as-number') {
    return +result;
  }
  return result.toString();
}

const combinedAges = combine(30, 36, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '36', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');

console.log(combinedNames);

// 1:46:47
