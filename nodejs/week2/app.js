import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Read and parse documents.json
function getDocuments() {
  const data = fs.readFileSync("documents.json", "utf-8");
  return JSON.parse(data);
}

// Home route
app.get("/", (request, response) => {
  response.send("This is a search engine");
});

// GET /search?q=...
// If query is provided, return matching documents
// If not, return all documents
app.get("/search", (request, response) => {
  const query = request.query.q;
  const documents = getDocuments();

  if (!query) {
    return response.json(documents);
  }

  const result = documents.filter((document) =>
    Object.values(document).some((value) =>
      String(value).toLowerCase().includes(query.toLowerCase())
    )
  );

  response.json(result);
});

// GET /documents/:id
// Return a document by its ID or 404 if not found
app.get("/documents/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const documents = getDocuments();

  const document = documents.find((doc) => doc.id === id);

  if (!document) {
    return response.status(404).send("Document not found");
  }

  response.json(document);
});

// POST /search
// Accepts either query parameter "q" or body field "fields", not both
// "q" performs keyword search; "fields" filters by specific field values
app.post("/search", (request, response) => {
  const query = request.query.q;
  const fields = request.body.fields;
  const documents = getDocuments();

  if (query && fields) {
    return response.status(400).json({
      error: 'You can only use either query "q" or body "fields", not both',
    });
  }

  let result = documents;

  if (query) {
    result = documents.filter((document) =>
      Object.values(document).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  if (fields) {
    result = documents.filter((document) =>
      Object.entries(fields).every(
        ([key, value]) =>
          String(document[key]).toLowerCase() === String(value).toLowerCase()
      )
    );
  }

  response.json(result);
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//REsult
//http://localhost:3000/search?q=ali
//output : [{"id":5,"type":"doc","value":"hello ali"}]
