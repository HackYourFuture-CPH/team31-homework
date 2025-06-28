"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import { Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const [modalOpen, setModalOpen] = useState(null);

  const openForm = (formName) => setModalOpen(formName);
  const closeForm = () => setModalOpen(null);

  const buttonStyles = {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: "1rem",
    ":hover": {
      backgroundColor: "#333",
    },
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/pages/pictureoftheday">
          <button className={pathname === "/pages/pictureoftheday" ? "linkButton linkButtonActive" : "linkButton"}>Image of the Day</button>
        </Link>

        <Link href="/pages/roverphoto">
          <button className={pathname === "/pages/roverphoto" ? "linkButton linkButtonActive" : "linkButton"}>Rover Photo</button>
        </Link>
        {user ? (
          <>
            <span className={styles.user}>Hello, {user.name}!</span>
            <Button
              sx={buttonStyles}
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null);
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button sx={buttonStyles} onClick={() => openForm("login")}>
              Login
            </Button>
            <Button sx={buttonStyles} onClick={() => openForm("signup")}>
              Signup
            </Button>
          </>
        )}
      </nav>
      <BurgerMenu openForm={openForm} />
      {modalOpen === "login" && (
        <div className={styles.login} id="login">
          <div className={styles.login__content}>
            <span className={styles.login__close} onClick={closeForm}>
              &times;
            </span>
            <LoginForm closeForm={closeForm} setUser={setUser} />
          </div>
        </div>
      )}

      {modalOpen === "signup" && (
        <div className={styles.login} id="signup" style={{ display: "flex" }}>
          <div className={styles.login__content}>
            <span className={styles.login__close} onClick={closeForm}>
              &times;
            </span>
            <SignupForm closeForm={closeForm} setUser={setUser} />
          </div>
        </div>
      )}
    </>
  );
}

export function BurgerMenu({ openForm }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.burgerMenu}>
      <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List style={{ width: 250 }}>
          <Box className={styles.drawer}>
            <Link href="/pages/pictureoftheday">
              <button className={pathname === "/pages/pictureoftheday" ? "linkButton linkButtonActive" : "linkButton"}>Image of the Day</button>
            </Link>
            <Link href="/pages/roverphoto">
              <button className={pathname === "/pages/roverphoto" ? "linkButton linkButtonActive" : "linkButton"}>Rover Photo</button>
            </Link>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                ":hover": {
                  backgroundColor: "#333",
                },
              }}
              onClick={() => openForm("login")}
            >
              Login
            </Button>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                ":hover": {
                  backgroundColor: "#333",
                },
              }}
              onClick={() => openForm("signup")}
            >
              Signup
            </Button>
          </Box>
        </List>
      </Drawer>
    </div>
  );
}

function SignupForm({ closeForm }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordOneRef = useRef();
  const passwordTwoRef = useRef();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const passwordOne = passwordOneRef.current.value;
    const passwordTwo = passwordTwoRef.current.value;

    if (passwordOne !== passwordTwo) {
      alert("The passwords do not match");
      return;
    }

    const user = { name, email, password: passwordOne };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! You can now log in.");
    closeForm();
    router.push("/");
  };

  return (
    <>
      <h2>Signup</h2>
      <form id="signupForm" onSubmit={handleSubmit}>
        <input ref={nameRef} className="login__input" type="text" name="signupName" placeholder="Name" minLength="4" required />
        <input ref={emailRef} className="login__input" type="email" name="signupEmail" placeholder="Email" required />
        <input ref={passwordOneRef} className="login__input" type="password" name="signupPasswordOne" placeholder="Password" minLength="6" required />
        <input ref={passwordTwoRef} className="login__input" type="password" name="signupPasswordTwo" placeholder="Repeat Password" minLength="6" required />
        <button type="submit">Create Account</button>
      </form>
    </>
  );
}

function LoginForm({ closeForm, setUser }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      alert(`Welcome back, ${savedUser.name}!`);
      setUser(savedUser);
      closeForm();
      router.push("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" placeholder="Email" required />
        <input ref={passwordRef} type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
