/*
동작의 종류: click, dblclick, scroll, change, submit, ...
- addEventListner(동작의 종류, function(){})
- <태그 onchange = "함수의 이름()" onclick = "함수의 이름()"></태그>
   on[동작의 종류] 속성으로 이벤트 제어 가능
*/

const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');

// btn1.addEventListener("동작의 이름", function(){동작});
btn1.addEventListener("click", function(){
    console.log('btn1이 클릭되었습니다.');
    alert('버튼1을 클릭하셨군요');
});

btn1.addEventListener("mouseover", function(){
    btn1.style.backgroundColor = 'aqua';
})
btn1.addEventListener("mouseout", function(){
    // btn1.style.backgroundColor = 'black';
    this.style.backgroundColor = 'black';
})

// btn2를 눌렀을 때, div를 자식으로 붙이기
const container = document.getElementById('container');
btn2.addEventListener('click', () => {
    let div = document.createElement('div');
    div.innerText = 'hi!';
    div.style.background = 'pink';
    container.append(div);
})

// btn3을 눌렀을 때, 만들어진 div의 배경색 변경
function changeColor() {
    const divs = document.querySelectorAll('#container > div');
    for(let d of divs) {
        d.style.background = 'skyblue';
    }
    // 막내 요소만 노란색으로 변경
    divs[divs.length-1].style.background = 'yellow';
}
// 함수 호출시 괄호 필수적으로 생략해야함. 작성시 즉시 호출
btn3.addEventListener('click', changeColor);

// btn4를 누르면 배경색 노란색으로 변경, 글자색 검정색으로 변경
btn4.addEventListener('click', changeBtnColor);
function changeBtnColor() {
    this.style.backgroundColor = 'yellow';
    this.style.color = 'black';
}

// btn5를 누르면 alert창 띄우기
function sayHi() {
    alert('hi btn5!');
}

// ----------------------------------------------------------------
const btn = document.querySelector('button');

/* 1. [클릭 이벤트] */
btn.addEventListener('click', function(event) {
    // 클릭 이벤트에 관한 정보 (event객체)
    console.log(event);
    // 어떤 요소가 클릭되었는지 확인 가능
    console.log(event.target);
});

// ----------------------------------------------------------------
const input = document.querySelector('input');

/* 2. [키보드 이벤트] */
input.addEventListener('keydown', function(event) {
    // console.log(event);

    // 방향키 아래, 위, 왼쪽, 오른쪽
    if(event.code === 'ArrowDown') {
        console.log('아래쪽 방향키 눌림');        
    } else if(event.code === 'ArrowUp'){
        console.log('위쪽 방향키 눌림');        
    } else if(event.code === 'ArrowLeft'){
        console.log('왼쪽 방향키 눌림');        
    } else if(event.code === 'ArrowRight'){
        console.log('오른쪽 방향키 눌림');        
    } else {
        console.log('방향키 아닌 키 누르는 중');
    }   
})


// console.log(window);
window.addEventListener('scroll', (e) => {
    // console.log(e);
    // console.log(scrollY);

    // scrollY 700에서 div opacity > 1
    if(scrollY >= 700) {
        document.querySelector('.pos').style.opacity = '1';
    }
})


// ----------------------------------------------------------------
// 폼 이벤트
/* 4. [submit] */
const todoForm = document.querySelector('#todo-form');
const todos = document.querySelector('.todos');

todoForm.addEventListener('submit', (e) => {
    // form이 제출되는 것을 취소. 이벤트 전달을 막는 방법.
    // 새로고침 막음
    e.preventDefault();
    
    console.log('submit');

    // form 내부의 input창 선택택
    const todoInput = document.querySelector('input[name = "todo"]');
    // 요소가 가지고 있는 데이터를 출력
    // console.dir(todoInput);

    // 공백으로 들어오는 문자는 추가되지 않도록
    const todo = todoInput.value.trim();

    if(todo !== "") {
        // 선택된 ul 태그의 자식으로 <li>todo</li> 붙이기
        const li = document.createElement('li');
        li.textContent = todo;
        todos.append(li);
    } else {
        alert("오늘의 할 일을 작성하세요");
    }        
})


// ----------------------------------------------------------------
/* 5. [change 이벤트] */
const changeInput = document.querySelector('#change-input');
// input창의 value에 변경이 발생하고 input창 바깥을 클릭하면 일어나는 이벤트
changeInput.addEventListener('change', function() {
    console.log('changed!');
})

// input창의 value에 변경이 발생되면 일어나는 이벤트
changeInput.addEventListener('input', function() {
    console.log('changing!!');

    let intro = document.querySelector('.intro');
    intro.innerHTML = this.value;
})



