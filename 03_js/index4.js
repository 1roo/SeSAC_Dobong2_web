/* 1. if */
/*
if(조건식) {
    조건식이 참일 때 실행할 문장
}
*/

if(5 > 3) {
    console.log('조건이 참입니다.');
}

let number = Number(prompt('숫자를 입력해 주세요'));
if(number > 10) {
    console.log('입력받은 수가 10보다 큽니다.');
} else {
    console.log('입력받은 수가 10과 같거나 10보다 작습니다.');
}

if(number > 10) {
    console.log('입력받은 수가 10보다 큽니다'); 
} else if(number === 10) {
    console.log('입력받은 수는 10입니다.');
} else {
    console.log('입력받은 수가 10보다 작습니다.');
}

// 90점 이상은 A, 80점 이상은 B, 70점 이상은 C, 그 아래는 모두 F
let score = Number(prompt('점수를 입력하세요'));
if(score <= 100 && score >= 90) {
    console.log('A입니다.');    
} else if(score >= 80) {
    console.log('B입니다.');
} else if(score >= 70) {
    console.log('C입니다.');
} else {
    console.log('F입니다.');
}

/* 조건문 중첩 */
let userId = 'user01';
let userPw = '1234qwer';

function loginUser() {
    let promptId = prompt('ID를 입력해주세요.');
    if(userId === promptId) {
        let promptPw = prompt('비밀번호를 입력해주세요.');
        if(userPw === promptPw) {
            console.log('로그인 성공!');
            alert('안녕하세요 ' + userId + '님!');
        } else {
            alert('비밀번호가 틀렸습니다.')
        }
    } else if(promptId === '') {
        alert('아이디를 입력해주세요.')
    } else {
        alert('없는 아이디입니다.')
    }
}

loginUser();

/* 2. switch문 */
let a = Number(prompt('숫자를 입력하세요.'));

// switch의 괄호에는 조건이 아닌 값이 들어감
switch(a) {
    // case에는 값에 대한 경우가 들어감
    case 3:
        console.log('a가 3입니다.');
        break;
    case 4:
        console.log('a가 4입니다.');
        break;
    case 5:
        console.log('a가 5입니다.');
        break;
    case 6:
    case 7:
        console.log('a는 6 또는 7입니다.');
        break;        
    default:
        console.log('a가 어떤 숫자인지 모르겠어요');
        break;
}


/* 3. 삼항연산자 */
let num = 5;
if(num % 2 === 1) {
    console.log('홀수');
} else {
    console.log('짝수');
}

// 조건 ? 참일 때 : 거짓일 때
num % 2 === 1 ? console.log('홀수') : console.log('짝수');

let fruit = 'banana';
const value = fruit === 'banana' ? "yellow" : "red";
console.log(value);

let value2;
if(fruit === 'banana') {
    value2 = 'yellow';
} else {
    value2 = 'red';
}
console.log(value2);


