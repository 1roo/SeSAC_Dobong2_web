// 1.
const sum1 = function (a: number, b: number): void {
  console.log(a + b);
};
sum1(5, 11);

// 2.
const sum2 = function (...nums: number[]): number {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
};
console.log(sum2(1, 2, 3, 4, 10));
