"use client";

import TodoList from "./components/todolist";
import { Counter } from "./components/counterContext";
import { useLanguage } from "./components/localizationcontext";
import { Context } from "./components/themecontext";
import Button from "@mui/material/Button";

export default function Page() {
  const { language, setLanguage } = useLanguage();

  return (
    <main>
      <Context />
      <TodoList />
      <div>
        <h1>Current language: {language}</h1>
        <Button variant="contained" onClick={() => setLanguage((prev) => (prev === "en" ? "fr" : prev === "fr" ? "zh" : "en"))}>
          Switch Language
        </Button>
        <Counter />
      </div>
    </main>
  );
}
