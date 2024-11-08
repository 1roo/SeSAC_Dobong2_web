const done = document.querySelectorAll('li[class = "done"]');
const todo = document.querySelectorAll('li[class = "todo"]');
todo.classList.toggle('done');
done.classList.toggle('done');