export default function Home() {
  return (
    <div>
      <Greeting />
      <Card />
    </div>
  );
}

function Greeting() {
  return <h1>Hello, React!</h1>;
}

function Card() {
  return (
    <div>
      <h2>Card Title</h2>
      <p>Card Component</p>
    </div>
  );
}
