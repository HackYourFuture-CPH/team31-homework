"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function SignUpForm() {
  const router = useRouter();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [errors, setErrors] = useState({});

  const handleEnter = (e, nextRef) => {
    if (e.key === "Enter" && nextRef.current) {
      nextRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();

    const newErrors = {};
    if (!firstName) newErrors.firstName = true;
    if (!lastName) newErrors.lastName = true;
    if (!email.includes("@")) newErrors.email = true;
    if (!phone.match(/^\d{10}$/)) newErrors.phone = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      router.push("/");
    }
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          inputRef={firstNameRef}
          fullWidth
          margin="normal"
          error={!!errors.firstName}
          onKeyDown={(e) => handleEnter(e, lastNameRef)}
        />
        <TextField
          label="Last Name"
          inputRef={lastNameRef}
          fullWidth
          margin="normal"
          error={!!errors.lastName}
          onKeyDown={(e) => handleEnter(e, emailRef)}
        />
        <TextField
          label="Email"
          inputRef={emailRef}
          fullWidth
          margin="normal"
          error={!!errors.email}
          onKeyDown={(e) => handleEnter(e, phoneRef)}
        />
        <TextField
          label="Phone Number"
          inputRef={phoneRef}
          fullWidth
          margin="normal"
          error={!!errors.phone}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "1rem" }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
