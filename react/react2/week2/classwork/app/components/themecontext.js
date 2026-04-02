"use client";

import { createContext, useReducer, useContext } from "react";

export const ThemeContext = createContext();

const ACTIONS = {
  TOGGLE: "Toggle",
  SET_LIGHT: "Light",
  SET_DARK: "Dark",
};

function themeReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_LIGHT:
      return SET_LIGHT;
    case ACTIONS.SET_DARK:
      return SET_DARK;
    case ACTIONS.TOGGLE:
      return state === ACTIONS.SET_DARK ? ACTIONS.SET_LIGHT : ACTIONS.SET_DARK;
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, ACTIONS.SET_LIGHT);

  const toggleTheme = () => {
    dispatch({ type: ACTIONS.TOGGLE });
  };

  const setLightTheme = () => {
    dispatch({ type: ACTIONS.SET_LIGHT });
  };

  const setDarkTheme = () => {
    dispatch({ type: ACTIONS.SET_DARK });
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setLightTheme, setDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function Context() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === ACTIONS.SET_LIGHT ? "#eee" : "#333",
        color: theme === ACTIONS.SET_LIGHT ? "#333" : "#eee",
        padding: "2rem",
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
