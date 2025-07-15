"use client";
import styles from "../todolist/page.module.css";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <TodoList />
    </>
  );
}

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    const newItem = {
      name: todoName,
      description: todoDescription,
    };
    setTodoList([...todoList, newItem]);
  };

  const deleteData = (e) => {
    e.preventDefault();
    const filterList = todoList.filter(e);
    setTodoList([filterList]);
  };

  const handleChangeName = (e) => {
    setTodoName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setTodoDescription(e.target.value);
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          type="text"
          value={todoName}
          onChange={handleChangeName}
          placeholder="Todo Name"
          className={styles.input}
        />
        <input
          type="text"
          value={todoDescription}
          onChange={handleChangeDescription}
          placeholder="Todo Description"
          className={styles.input}
        />
        <br />
        <button className={styles.button} type="submit" onClick={submitData}>
          This is a submit button
        </button>
        <br />
        <button className={styles.button} type="submit" onClick={deleteData}>
          This is a Remove button
        </button>
      </form>
      <ul className={styles.ulist}>
        {todoList.map((todo, index) => (
          <li className={styles.list} key={index}>
            <br />
            Task Name: {todo.name} <br />
            Description: {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
