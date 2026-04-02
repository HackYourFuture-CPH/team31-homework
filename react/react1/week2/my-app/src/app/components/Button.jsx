export default function Button({ text, onClick }) {
  if (!{ text }) return <button onClick={onClick}>Empty Button</button>;

  return <button onClick={onClick}>{text}</button>;
}
