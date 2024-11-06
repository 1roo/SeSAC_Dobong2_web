// 1. 태그 내부 내용
/*
- innerText
- textContent
- innerHTML
*/

let div1 = document.getElementById('div1');
console.log(div1);
div1.innerText = '    여기는 <b>첫번째</b> 태그입니다. &hearts     /';      // 2칸 이상의 공백, 앞뒤 공백 제거
console.log('innerText: ' + div1.innerText);
div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다. &hearts;'
div1.textContent = '    여기는 <b>첫번째</b> 태그입니다. &hearts;     /'    // 2칸 이상의 공백, 앞뒤 공백 살아있음
console.log('textContent: ' + div1.textContent);
