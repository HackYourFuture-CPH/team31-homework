import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState();
  const addData = (item) => setFormData((prev) => [...prev, item]);
  return <form></form>;
}

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (item) => setTodos((prev) => [...prev, item]);

  return (
    <>
      <TodoInput onAdd={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} value={todo} />
      ))}
    </>
  );
}
