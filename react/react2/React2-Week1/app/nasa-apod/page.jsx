async function getAPOD() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`
  );
  return res.json();
}

export default async function NasaAPODPage() {
  const data = await getAPOD();
  /* for example data = 
{
  "date": "2025-06-23",
  "explanation": "A detailed explanation of the image...",
  "hdurl": "https://apod.nasa.gov/apod/image/2306/someimage.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Amazing Space Image",
  "url": "https://apod.nasa.gov/apod/image/2306/someimage.jpg"
}
  */

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
