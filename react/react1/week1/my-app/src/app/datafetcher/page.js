"use client";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <DataFetcher />
    </>
  );
}

export const DataFetcher = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=55.67&longitude=12.57&current=temperature_2m,weathercode"
      );
      const object = await response.json();
      setData(object);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data);

  const temperature = data.current?.temperature_2m;

  return (
    <div>
      <div>The Temperature in Copenhagen is: {temperature}°C</div>
    </div>
  );
};
