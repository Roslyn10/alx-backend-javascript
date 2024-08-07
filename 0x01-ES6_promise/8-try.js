export default function divideFunction(numerator, denominator) {
  return new Promise((resolve, reject) => {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    } else {
      const result = numerator / denominator;
      resolve(result);
    }
  });
}

