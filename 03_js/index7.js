// 1. Date 객체
let now = new Date();
console.log(now);
console.log(new Date('September 30, 1990 13:00:00'));

// 1970.01.01 00:00:00 이후로 몇 밀리초나 지났는지
console.log(new Date(6000));
console.log(new Date(2010, 2, 2));
console.log(new Date(2010, 3, 3, 9, 5, 40));

console.log(now.getFullYear() + '년');
console.log(now.getMonth() + '월');  // (0 ~ 11)
console.log(now.getDate() + '일');   // (1 ~ )
console.log(now.getHours() + '시');  // (0 ~ 23)
console.log(now.getMinutes() + '분');  // (0 ~ 59)
console.log(now.getSeconds() + '초');  // (0 ~ 59)
console.log(now.getMilliseconds() + '밀리초');  // (0 ~ 999)
console.log(now.getDay() + '요일');  // (0 ~ 6) (일 ~ 토)

// 퀴즈
// 조건문을 사용해 오늘이 주말인지 평일인지 출력
now.getDay === 0 || now.getDay === 6 ? console.log('주말입니다') : console.log('평일입니다');

if(now.getDay === 0 || now.getDay === 6) {
    console.log('주말입니다');
} else {
    console.log('평일입니다');
}

switch (now.getDay) {
    case 0:
    case 6: console.log('주말입니다.');
        break;
    default:
        console.log('평일입니다');
        break;
}


// 2. Math 객체
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2); // 루트2

console.log(Math.min(50, 10, 3, 6, -2, -8)); // 최소값
console.log(Math.max(50, 10, 3, 6, -2, -8)); // 최대값
console.log(Math.random()); // 0 <= x < 1
console.log(Math.round(5.4)); // 소숫점 반올림
console.log(Math.ceil(5.4)); // 소숫점 올림
console.log(Math.floor(5.4)); // 소숫점 버림

// Math.random() 응용
// 0 ~ 9 까지의 소수가 아닌 난수 뽑기
console.log('난수1: ' + Math.floor(Math.random() * 10));

// 1 ~ 10 까지의 자연수 난수
console.log('난수2: ' + Math.ceil(Math.random() * 10));
console.log('난수2: ' + (Math.floor(Math.random() * 10) + 1));


// 20 ~ 22까지의 난수
console.log('난수3: ' + (Math.floor(Math.random() * 3) + 20));

// object
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

// object의 key만 가져와서 배열로 변환
let key = Object.keys(areaNum);
// object의 value만 가져와서 배열로 변환
let value = Object.values(areaNum);

console.log(key);
console.log(value);

