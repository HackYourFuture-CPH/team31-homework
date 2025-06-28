export default function whyUs() {
  return (
    <div>
      <ReasonOne />
      <ReasonTwo />
      <ReasonThree />
    </div>
  );
}

function ReasonOne() {
  return <p>We Are the best at what we do</p>;
}

function ReasonTwo() {
  return <p>There is no one like us</p>;
}

function ReasonThree() {
  return <p>You are already here, so!</p>;
}
