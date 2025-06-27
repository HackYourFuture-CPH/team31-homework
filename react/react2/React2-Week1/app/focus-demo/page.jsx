"use client";
import { useRef } from "react";

export default function FocusDemoPage() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const handleFirstNameEnter = (e) => {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  };

  const handleLastNameEnter = (e) => {
    if (e.key === "Enter") {
      emailRef.current.focus();
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Focus Management with Refs</h1>

      <input
        ref={firstNameRef}
        type="text"
        placeholder="First Name"
        onKeyDown={handleFirstNameEnter}
        style={{ display: "block", marginBottom: "1rem" }}
      />

      <input
        ref={lastNameRef}
        type="text"
        placeholder="Last Name"
        onKeyDown={handleLastNameEnter}
        style={{ display: "block", marginBottom: "1rem" }}
      />

      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        style={{ display: "block", marginBottom: "1rem" }}
      />
    </main>
  );
}
