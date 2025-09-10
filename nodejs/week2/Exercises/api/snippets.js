import express from "express";
import db from "../database.js";

const router = express.Router();

//DEFAULT ROUTE
router.get("/", (req, res) => {
  res.json({
    message: "Snippets API working!",
  });
});

// To View All Data in the DB hyf_node_week2 TABLE snippets
router.get("/snippets", async (req, res) => {
  try {
    const users = await db("snippets").select("*");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data from database" });
  }
});

// To View a Specific Snippet by ID
router.get("/snippets/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const snippet = await db("snippets").where({ id }).first();
    if (!snippet) {
      return res.status(404).json({ error: "Snippet not found" });
    }
    res.json(snippet);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data from database" });
  }
});

// TO Insert New Record in the DB hyf_node_week2 TABLE snippets
router.post("/snippets", async (req, res) => {
  const { user_id, title, contents, is_private } = req.body;

  if (!user_id || !title || !contents || typeof is_private !== "boolean") {
    return res.status(400).json({ error: "Missing required fields" });
  }
  console.log("user_id", user_id);
  console.log("title", title);
  console.log("content", contents);
  console.log("is_private", is_private);

  try {
    const [id] = await db("snippets").insert({
      user_id,
      title,
      contents,
      is_private,
    });

    res.status(201).json({
      id,
      user_id,
      title,
      contents,
      is_private,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to create snippet" });
  }
});

export default router;

// I am missing last portion of EXERCISE SECTION WEEK 2. (06 Auth.md)
// I will try to finish it before next sunday session.
