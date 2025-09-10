import express from "express";
import fs from "fs/promises";
import { json } from "stream/consumers";

export const router = express.Router();

const filePath = "./documents.json";

const fileContent = await fs.readFile(filePath, { encoding: "utf8" });
const jsonFileContent = JSON.parse(fileContent);

// DEFAULT ROUTE
router.get("/", (req, res) => {
  res
    .type("text/plain")
    .send(
      `You Can Search Here USING these routes \n 1. /search\n` +
        `OR\n 2. /search?query=your_query&content=your_content\n` +
        `OR\n 3. /search?query=your_query`
    );
});

// This Route Will Show All Documents in documents.json
router.get("/search", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      error: "Query parameter is required: Like localhost:port/search/?q=****",
    });
  }

  try {
    const outPut = jsonFileContent.filter((item) => {
      return Object.values(item).some((val) =>
        String(val).toLowerCase().includes(q.toLowerCase())
      );
    });
    if (outPut.length > 0) {
      res.json(outPut);
    } else {
      res.send("No documents found matching the query.");
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to read or parse JSON file" });
  }
});

// This Route Will Search Documents By ID
router.get("/documents/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  try {
    const outPut = jsonFileContent.filter((item) => item.id === id);

    if (outPut.length > 0) {
      res.json(outPut);
    } else {
      res.status(404).json({ error: "Document not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to read or parse JSON file" });
  }
});

// This Route Will Search Documents By USING POST Method
router.post("/search", async (req, res) => {
  const { q } = req.query;
  const { fields = {} } = req.body || {};

  try {
    if (q && Object.keys(fields).length > 0) {
      return res.status(400).json({
        error:
          "Both 'q' query and 'fields' body cannot be provided at same time",
      });
    }

    let outPut = [];

    if (q) {
      outPut = jsonFileContent.filter((item) => {
        return Object.values(item).some((val) =>
          String(val).toLowerCase().includes(q.toLowerCase())
        );
      });
    } else if (Object.keys(fields).length > 0) {
      outPut = jsonFileContent.filter((item) => {
        return Object.entries(fields).every(([key, value]) => {
          if (key && value) {
            return (
              item[key] &&
              String(item[key]).toLowerCase() === String(value).toLowerCase()
            );
          }
          return true;
        });
      });
    } else {
      return res
        .status(400)
        .json({ error: "Either 'q' query or 'fields' body is required" });
    }
    if (outPut.length === 0) {
      return res.status(404).json({ error: "No documents found" });
    } else {
      res.json(outPut);
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to process search" });
  }
});

export default router;
