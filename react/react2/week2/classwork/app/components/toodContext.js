"use client";

import { createContext, useContext, useReducer } from "react";

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
};

function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
}

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return <TodoContext.Provider value={{ todos, dispatch }}>{children}</TodoContext.Provider>;
};
