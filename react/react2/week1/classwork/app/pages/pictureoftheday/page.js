"use client";

import { useEffect, useState } from "react";

export default function PictureOfTheDay() {
  const NASA_URL = "https://api.nasa.gov/planetary/apod?api_key=NPpoY3W66xTi5d1rO46lyEKyesoY17FlCDruMnWb";

  const [dailyImage, setDailyImage] = useState(null);

  useEffect(() => {
    const fetchDailyImage = async () => {
      const response = await fetch(NASA_URL);
      const data = await response.json();
      setDailyImage(data);
    };
    fetchDailyImage();
  }, []);

  if (!dailyImage) return <div>Loading...</div>;

  return (
    <div>
      <h1>{dailyImage.title}</h1>
      <img src={dailyImage.url} alt={dailyImage.title} style={{ maxWidth: "100%" }} />
      <p>{dailyImage.explanation}</p>
    </div>
  );
}
