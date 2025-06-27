"use client";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div style={{ fontSize: "24px", fontWeight: "bold" }}>
      Hai Suman{time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
