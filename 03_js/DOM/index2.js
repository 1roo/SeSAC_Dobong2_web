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


// 2. 속성에 접근
/**
- 요소.속성명
- getAttribute(): 속성값 가져오기
- setAttribute(): 속성값 설정하기 > 추가, 변경
 */

// beach, naver 아이디
let naver = document.getElementById('naver');
console.log(naver);
// naver.setAttribute('속성이름', '바꿔줄 속성값')
naver.setAttribute('href', 'https://www.google.com');

console.log(naver.href);
console.log(naver.getAttribute('href'));

naver.textContent = '구글로 이동';

console.log(document.querySelector('#beach').src);
document.querySelector('#beach').alt = '바다 사진';


// 3. CSS 변경
let h1 = document.getElementsByTagName('h1')[0];
// let h1 = document.querySelector('h1');
let list = document.querySelectorAll('li');

console.log(h1);


// 배경색 분홍색, 글자색 흰색, 글씨크기 1.3rem
for(let el of list) {
    // el.style.color = "#fff";
    // el.style.backgroundColor = "pink";
    // el.style.fontSize = '1.3.rem';
    el.classList.add('friends')
}

// 클래스가 있는지 없는지 확인 >> true, false 반환
h1.classList.add('add-h1');
h1.classList.remove('add-h1');
h1.classList.toggle('add-h1');

console.log(h1.classList.contains('add-h1'));
console.log(h1.classList); // 선택된 요소의 클래스 목록 확인


// 4. 부모, 자식, 형제 노드 찾기
let friends = document.getElementById('friends');
let tigger = document.querySelector('#tigger');

console.log('---자식 노드 접근---');
// 배열 형태로 가지고 옴
console.log(friends.children);
console.log(friends.children[0]);

console.log('---부모 노드 접근---');
// 배열 형태가 아닌 요소 자체를 가져옴
console.log(tigger.parentNode);

console.log('---형제 노드 접근---');
// 배열 요소가 아닌 요소 자체를 가져옴
console.log('이전 형제: ' + tigger.previousElementSibling);
console.log('다음 형제: ' + tigger.nextElementSibling);


// 5. 노드 생성, 추가, 삭제
let container = document.querySelector('.container');

// 요소 생성
let p = document.createElement('p');
p.innerText = '새로 추가된 p';
p.style.fontWeight = '700';
p.style.background = 'red';
p.id = 'append-p';

// 요소 추가
// append(): 선택된 요소(container)의 맨 뒤 자식요소로 추가됨
container.append(p);

let p2 = document.createElement('p');
p2.innerText = 'p2';
p2.classList.add('p-2')
// container.append(p2);

let p3 = document.createElement('p');
p3.textContent = 'p3';
p3.classList.add('p-3')
container.appendChild(p3);

container.append(p2, p3, 'hello');

// prepend(): 선택된 요소의 맨 앞 자식으로 추가
let li = document.createElement('li');
li.textContent = '캉가';
li.classList.add('friends');
friends.prepend(li);

// before()
let h3 = document.createElement('h3');
h3.innerText = 'h3 태그';
h1.before(h3);

// after()
let h2 = document.createElement('h2');
h2.innerHTML = 'h2 태그';
h1.after(h2);


// 삭제할요소.remove()
h2.remove();

// 부모요소.removeChild(삭제할 자식 요소)
let firstLi = document.querySelector('li');
let ul = firstLi.parentElement;
ul.removeChild(firstLi);


// 실습
let div = document.createElement('div');
container.append(div);
let img = document.createElement('img');
let span = document.createElement('span');
div.append(img, span);
img.setAttribute('src', '../../02_css/practice/beach3.jpg');
img.alt = 'ddd';
span.textContent = '이요르';