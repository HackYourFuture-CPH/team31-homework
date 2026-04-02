"use client";

import { useTodos } from "./toodContext";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

export default function TodoList() {
  const { todos, dispatch } = useTodos();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TextField label="Add todo" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button variant="contained" onClick={handleAdd} sx={{ ml: 1 }}>
        Add
      </Button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Checkbox checked={todo.completed} onChange={() => handleToggle(todo.id)} />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <Button variant="outlined" color="error" onClick={() => handleRemove(todo.id)} sx={{ ml: 1 }}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
