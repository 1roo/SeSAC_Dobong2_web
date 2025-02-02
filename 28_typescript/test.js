// var str = "hi";
// var a = 1;
// var b = { name: "allie" };
// console.log(str);
// console.log(a);
// console.log(b);

function jsPrint(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

jsPrint(1, 2, 3, 4, 5);

function addSometing(a, b) {
  return a + b; // number
}

function sum(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5));
