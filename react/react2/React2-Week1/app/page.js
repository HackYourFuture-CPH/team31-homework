"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Cards from "../components/Cards";
import Person from "../components/Person";
import Greeting from "../components/Greeting";
import Rules from "../components/Rules";
import Card from "../components/Card";
import Button from "../components/Button";
import DangerButton from "../components/DangerButton";
import TextInput from "../components/TextInput";
import ProfileImage from "../components/ProfileImage";
import { ButtonNew } from "../components/ui/ButtonNew";
import ClickCounter from "../components/ClickCounter";
import SimpleFormData from "../components/SimpleFormData";
import TodoList from "../components/TodoList";
import Clock from "@/components/Clock";
import DataFetcher from "@/components/DataFetcher";
export default function Home() {
  const handleClick = () => {
    alert("Button Clicked!");
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Greeting />
        <Rules />
        <Card />
        <Cards />
        <ClickCounter />
        <TodoList />
        <Person />
        <Button />
        <DangerButton />
        <TextInput />
        <ProfileImage />
        <Clock />
        <DataFetcher />
        <ButtonNew text="Click Me!" onClick={handleClick} />
        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <ul>
          <li>
            <Link href="/about">Go to About Page</Link>
          </li>
        </ul>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
