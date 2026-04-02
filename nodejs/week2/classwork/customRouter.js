import express, { response } from "express";
import fs from "fs/promises";

export const fileRouter = express.Router();

fileRouter.get("/file/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`Hello ${userName}`);
});

const filePath = "./data.json";

fileRouter.get("/read", async (req, res) => {
  const sort = req.query.sort;
  const filter = req.query.filter;

  const fileContent = await fs.readFile(filePath, { encoding: "utf8" });
  const parsedContent = JSON.parse(fileContent);

  const sortedFood = sortMyData(parsedContent, sort, filter);
  const filteredFood = filterMyData(sortedFood, filter);

  const responseData = { content: sortedFood, sort: sort ? sort : "No Sort Specified" };
  res.send(filteredFood);
});

function sortMyData(array, sort) {
  if (!sort) return array;
  if (sort === "up") return foodA.name.localeCompare(foodB.name);
  return foodB.name.localeCompare(foodA.name);
}

function filterMyData(array, filter) {
  if (!filter) return array;
  return array.filter((foodItem) => {
    return foodItem.name.includes(filter);
  });
}

fileRouter.post("/update/:content", async (req, res) => {
  const { content } = req.params;
  const data = await fs.readFile(filePath, { encoding: "utf8" });
  const dataParsed = JSON.parse(data);
  dataParsed.push({ content });
  await fs.writeFile(filePath, JSON.stringify(dataParsed));
  res.send("done");
});

// fileRouter.get("/update/:content", async (req, res) => {
//   const { content } = req.params;
//   const fileContent = fs.readFile(filePath, "utf-8");
//   const jsonContent = JSON.parse(fileContent);
//   jsonContent.push({ content });
//   const stringContent = JSON.stringify(jsonContent);
//   await fs.writeFile(filePath, stringContent);
//   res.send("Done");
// });
