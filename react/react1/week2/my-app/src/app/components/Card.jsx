export default function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img width="100px" src={imageUrl}></img>
    </div>
  );
}
