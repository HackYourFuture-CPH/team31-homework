import * as s from "./page.module.css";

import * as button from "../components/buttons.js";

export default function Home() {
  return (
    <div class={s.main}>
      <div class={s.divOne}>Very weird Page</div>
      <button.Simple />
      <button.Danger />
      <TextInput />
      <ProfileImage />
    </div>
  );
}

function TextInput() {
  return <input className={s.input} placeholder="Type Something Here"></input>;
}

function ProfileImage() {
  return <img src="https://picsum.photos/id/237/200/300"></img>;
}
