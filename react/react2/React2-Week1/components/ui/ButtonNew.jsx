"use client";
import React from "react";

export const ButtonNew = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="myCustomButton">
      {text}
    </button>
  );
};
