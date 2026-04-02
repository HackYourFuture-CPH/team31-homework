import express from "express";
import { getDocument } from "./document.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/search", async (req, res) => {
  const search = req.query.q;
  res.send(await searchQuery(search));
});

app.get("/documents/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(404).send({ error: `Id is mandatory` });
  const docs = await getDocument();
  const doc = docs.find((item) => Number(item.id) === Number(id));
  if (!doc) return res.status(404).send({ error: `The document has no data with such ID` });
  res.send(doc);
});

app.post("/search", async (req, res) => {
  const search = req.query.q;
  const fields = req.body && req.body.fields;

  if (search && fields) return res.status(400).send({ error: `Can only do one request at a time: Query or Fields` });

  if (search) res.send(await searchQuery(search));

  if (fields) res.send(await fieldsFilter(fields));
});

const searchQuery = async (search) => searchData(await getDocument(), search);

const fieldsFilter = async (fields) => filterData(await getDocument(), fields);

const searchData = (array, search) => {
  if (!search) return array;
  return array.filter((item) => item.name.toLowerCase().includes(search) || item.description.toLowerCase().includes(search));
};

const filterData = (array, fields) => {
  if (!fields) return array;
  const [key, value] = Object.entries(fields)[0];
  const filterResults = array.filter((item) => item[key] === value);
  if (!filterResults.length) return "No Matches Found";
  return filterResults;
};

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
