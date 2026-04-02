"use client";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <SimpleForm />
    </>
  );
}

export const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");
  const [data, setData] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    console.log(firstName);
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <form onSubmit={submitData}>
        <input type="text" value={firstName} onChange={handleChange}></input>
        <button type="submit">This is a submit button</button>
      </form>
    </>
  );
};
