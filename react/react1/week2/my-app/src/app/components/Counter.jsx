import { useState } from "react";

const [count, setCounter] = useState(0);

function increment() {
  setCounter(count + 1);
}

function decrement() {
  if (count <= 0) return;
  setCounter(count - 1);
}
