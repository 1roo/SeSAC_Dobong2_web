// let age = Number(prompt('나이를 입력하세요'));
let age = 10;

if(age >= 20) {
    console.log('성인');
} else if(age >= 17) {
    console.log('고등학생');
} else if(age >= 14) {
    console.log('중학생');
} else if(age >= 8) {
    console.log('초등학생');
} else if(age >= 0) {
    console.log('유아');
} else {
    console.log('잘못된 입력값');
}

let now = new Date().getHours();
now >= 0 && now < 12 ? console.log('오전') : console.log('오후');

let num = Number(prompt('숫자를 입력하세요'));
if(num <= 10000) {
    for(let i = 1; i <= num; i++){
        if(i % 13 === 0 && i % 2 === 1) {
            console.log(i);   
        }
    }
}

for(let i = 1; i <= 9; i++) {
    console.log(`---${i}단---`);
    for(let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

let sum5 = 0;
for(let i = 0; i <= 100; i++) {
    i % 2 === 0 || i % 5 === 0 ? sum5 += i : sum5
}
console.log(sum5);


