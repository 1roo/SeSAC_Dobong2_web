function printSome<T>(x: T, y: T): T {
  console.log("x와 y: ", x, y);
  return x;
}

printSome<number>(1, 2);
printSome<string>("1", "2");
printSome<boolean>(false, true);
// printSome<boolean>(false, "true");

function printSome2<T, K>(x: T, y: K): T {
  console.log("x와 y: ", x, y);
  return x;
}
printSome2<number, string>(1, "hello");

function arrLength(arr: any[]): number {
  return arr.length;
}
function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

function getValue(val: any): any {
  return val;
}

function getValue2<T>(val: T): T {
  return val;
}

console.log(arrLength2<string>(["a", "b"]));
console.log(arrLength2<string | number>(["a", "b", 1, 2]));

console.log(getValue2<string[]>(["a"]));

// interface generic 사용
interface Phone<T> {
  company: string;
  createdAt: Date;
  option: T;
}

const iphone15: Phone<string> = {
  company: "apple",
  createdAt: new Date("2023-10-13"),
  option: "black",
};
console.log("iphone15: ", iphone15);

type IphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<IphoneOption> = {
  company: "apple",
  createdAt: new Date("2024-10-06"),
  option: { color: "silver", storage: 256 },
};
console.log("iphone16: ", iphone16);
