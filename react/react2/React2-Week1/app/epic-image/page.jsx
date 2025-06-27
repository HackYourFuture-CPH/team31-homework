"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function EpicImagePage() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEpicImage() {
      if (!date) return;

      setLoading(true);

      try {
        const res = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=DEMO_KEY`
        );
        const data = await res.json();

        if (data.length > 0) {
          const imageName = data[0].image;
          const formattedDate = date.replace(/-/g, "/"); // "YYYY-MM-DD" → "YYYY/MM/DD"
          const url = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/jpg/${imageName}.jpg`;
          setImageUrl(url);
        } else {
          setImageUrl(null);
        }
      } catch (error) {
        console.error("Failed to fetch EPIC image", error);
      }

      setLoading(false);
    }

    fetchEpicImage();
  }, [date]);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>NASA EPIC Image</h1>
      {loading && <p>Loading...</p>}
      {!loading && imageUrl ? (
        <img src={imageUrl} alt="EPIC" style={{ maxWidth: "100%" }} />
      ) : (
        !loading && <p>No image found for date: {date}</p>
      )}
    </main>
  );
}
