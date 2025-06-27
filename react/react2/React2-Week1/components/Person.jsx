export default function Person() {
  const name = "Suman";
  const age = 30;
  return (
    <div>
      <h2>Person Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>
        {name} is {age >= 18 ? "an adult" : " a minor"}
      </p>
    </div>
  );
}
