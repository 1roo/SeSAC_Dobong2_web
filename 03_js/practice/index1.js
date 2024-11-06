let nums = [];
for(let n = 1; n <= 100; n++) {
    nums[n-1] = n;
}

let sum = 0;
for(let n = 0; n < nums.length; n++) {
    sum += nums[n];
}

sum = 0;
for(let n of nums) {
    sum += n;
}

sum = 0;
nums.forEach(n => {
    sum += n;
});


let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];


let same = [];
for(let f = 0; f < fruits2.length; f++) {
    if(fruits1.includes(fruits2[f])) {
        same.push(fruits2[f]);
    }
}
console.log(same);

let diff = [];
for(let f = 0; f < fruits1.length; f++) {
    if(!fruits2.includes(fruits1[f])) {
        diff.push(fruits1[f]);
    }
}
console.log(diff);

let now = new Date();
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


let random = Math.floor(Math.random() * 11);
console.log(random);
