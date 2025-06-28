import express from "express";
import { fileRouter } from "./customRouter.js";

const port = 8000;

const app = express();

app.get("/", async (req, res) => {
  res.send("Hey There");
});

app.use(fileRouter);

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
