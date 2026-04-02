"use client";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <ClickCoutner />
    </>
  );
}

export const ClickCoutner = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
};
