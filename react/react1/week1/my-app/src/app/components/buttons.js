import s from "./buttons.module.css";

export function Simple() {
  const className = `btn ${s["btn-primary"]}`;
  return <button className={className}>My First React Button</button>;
}

export function Danger() {
  const className = `btn ${s["btnDanger-primary"]}`;
  return <button className={className}>My First React Button</button>;
}
