let num: number = 1;
num = 2;
// num = "sss"; // number형 변수에 string타입을 할당해서 ERROR
console.log(num);

let str1: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// array 선언
let numArr: number[] = [1, 2, 3, 10];
let strArr: Array<string> = ["a", "b", "C"];

let arr1: (number | string)[] = [1, 2, 3, "a", "b", "c"];
let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3]];

let arr3: any[] = [1, 2, "a", [], {}, null, true];

// object
let obj1: object = {
  name: "aaa",
};

// 타입스크립트는 알아서 타입을 추론한다.
// 암묵적 타입 지정
let aa = 4; // aa를 선언하는 순간 암묵적으로 number형으로 지정정
let bb = "hello";
// aa ="ddd"; // ERROR
