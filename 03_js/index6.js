// 문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowerCase, trim, indexOf, slice
// replace, replaceAll, repeat, split

let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon  ";

// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[11]);

// Sonny 단어 만들기
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

// length 속성 확인
console.log('str1 길이: ' + str1.length);
console.log('str2 길이: ' + str2.length);

/* 메서드 사용해보기 */
console.log('str1: ' + str1);
console.log('str2: ' + str2);
console.log('str2 trim: ' + str2.trim());
console.log('str2 trim의 length: ' + str2.trim().length);

console.log('str1 소문자로: ' + str1.toLowerCase());
console.log('str1 대문자로: ' + str1.toUpperCase());

// indexOf, charAt, slice
let fruit = "applemango";
// indexOf: 찾고싶은 문자열의 인덱스 번호 반환
console.log("e: " + fruit.indexOf("e"));
console.log("a: " + fruit.indexOf("a"));
console.log("apple: " + fruit.indexOf("apple")); // 0
console.log("mango: " + fruit.indexOf("mango"));  // 5
// 없는 문자열을 찾으려 하면 -1 반환
console.log("z: " + fruit.indexOf("z"));  // -1

console.log("인덱스 0: " + fruit.charAt(0));
console.log("인덱스 8: " + fruit.charAt(8));
console.log("인덱스 18: " + fruit.charAt(18));  // ''

console.log("slice(5): " + fruit.slice(5));
console.log("slice(3, 6): " + fruit.slice(3, 6));
console.log("slice(-1): " + fruit.slice(-1));
console.log("slice(-4): " + fruit.slice(-4));


// replace, replaceAll
let msg1 = "Wow~ It is so amazing!!! Wow!";
console.log(msg1.replace('Wow', 'Hey~'));
console.log(msg1.replaceAll('Wow', 'Hoo!'));

let date = "2024.11.06";
console.log(date);
// YYYY-MM-DD
console.log(date.replaceAll('.', '-'));
date = date.replaceAll('.', '-');
console.log(date);

let hello = "hello";
console.log(typeof hello);

// split
let hello2 = hello.split();
console.log('split(): ' + hello2);

hello2 = hello.split('');
console.log("split(''): " + hello2);

hello2 = hello.split('e');
console.log("split('e'): " + hello2);
console.log(typeof hello2);

// ['2024', '11', '06']
date = date.split('-');
console.log(date);

// --------- 배열 ---------
console.log('-------------------------array method-------------------------');

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "rabbit", "puppy", "hamster"];

arr1[5] = 6;
arr1[8] = 8;
console.log(arr1);
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.push(7);
arr1.push(8);
console.log(arr1);

console.log(arr1.pop()); // 제거하는 값 반환
arr1.pop();
arr1.pop();
console.log(arr1);

arr2.unshift("cat");
console.log(arr2);
console.log(arr2.shift()); // 제거하는 값 반환
console.log(arr2);


// 배열.includes(요소) 배열에 요소가 있는지 없는지 확인
console.log(arr2.includes("cat"));
console.log(arr2.includes("quakka"));



arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length);
console.log(arr1.indexOf(4)); // 4가 몇 번 인덱스에 있는지

// reverse() 순서 뒤집기
arr1.reverse(); // 기존 배열이 변경됨
console.log(arr1);

// join('') 배열에서 문자열로 병합
str1 = arr1.join();
// join의 인자로 아무것도 전달이 되지 않으면 배열 안의 컴마까지 같이 문자열로 반환됨
console.log(str1); // 5, 4, 3, 2, 1
str1 = arr1.join('');
console.log(str1);

// for of, ferEach
let arr3 = [1, 5, 3, 4, 5];
let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];

// 기본 for문
for(let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// for of문
for(let el of arr3) {
    console.log(el);
}

// forEach(익명함수)
// forEach(function(num, i, arr)) 인자 순서 중요!
arr3.forEach(function(number, index, array) {
    console.log('요소', number);
    console.log('인덱스', index);
    console.log('배열', array);
    console.log('-----------------');
})

arr3.forEach((el) => {
    console.log(el);    
})

arr2 = ["quakka", "rabbit", "puppy", "hamster"];
// filter, map, find
// 매개변수로 들어가는 익명함수에 리턴값이 필수
console.log('---filter---');

// return 이후의 조건에 만족하는 요소를 찾아서 새로운 배열로 반환
let six = arr2.filter(function(el) {
    return el.length === 6;
})
console.log(six);

console.log('---find---');
// find는 찾은 값 중 제일 처음만 반환
let six2 = arr2.find(function(word) {
    return word.length === 6;
})
console.log(six2);

console.log('---map---');
let arr4 = [1, 2, 3, 4, 5];
let multiArr = arr4.map(function(num) {
    return num * 3;
})
console.log(multiArr);

multiArr = arr4.map((num) => num * 3);
console.log(multiArr);


// object 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};

for(let area in areaNum) {
    console.log(area); // key
    // 값에 접근하려면 대괄호 접근법으로만 사용 가능
    console.log(areaNum[area]);
    
}