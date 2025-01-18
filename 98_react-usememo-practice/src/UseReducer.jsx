import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
  }
};

const TodoApp = () => {
  // 상태 관리
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  // 추가 이벤트 핸들러
  const addTodo = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={input}
        placeholder="Add a new todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>등록</button>

      <ul>
        // Todo 목록
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <span
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
