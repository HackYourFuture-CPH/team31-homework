"use client";

import { createContext, useContext, useReducer } from "react";
import Button from "@mui/material/Button";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return <CounterContext.Provider value={{ count: state.count, dispatch }}>{children}</CounterContext.Provider>;
};

export const Counter = () => {
  const { count, dispatch } = useCounter();
  return (
    <div>
      <Button variant="contained" onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </Button>
      <h2>Counter: {count}</h2>
      <Button variant="contained" onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </Button>
    </div>
  );
};
