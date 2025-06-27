async function getAPOD() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`,
    { next: { revalidate: 60 } } // Tells Next.js to regenerate this page every 60 seconds
  );
  return res.json();
}

export default async function NasaSSGPage() {
  const data = await getAPOD();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <img
        src={data.url}
        alt={data.title}
        style={{ maxWidth: "100%", borderRadius: "8px" }}
      />
      <p>{data.explanation}</p>
    </main>
  );
}
