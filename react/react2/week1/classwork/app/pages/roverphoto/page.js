"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function RoverPhoto() {
  const NASA_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=NPpoY3W66xTi5d1rO46lyEKyesoY17FlCDruMnWb`;

  const [roverPhoto, setRoverPhoto] = useState({ photos: [] });

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const response = await fetch(NASA_URL);
      const data = await response.json();
      setRoverPhoto(data);
    };
    fetchRoverPhotos();
  }, []);

  if (!roverPhoto.photos || roverPhoto.photos.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Mars Rover Photos</h1>
      {roverPhoto.photos.map((item, index) => (
        <div key={item.id || index}>
          <img className={styles.roverPhoto} src={item.img_src} alt={item.rover.name} />
          <p>{item.camera.full_name}</p>
        </div>
      ))}
    </div>
  );
}
