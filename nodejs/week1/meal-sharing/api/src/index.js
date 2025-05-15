import express from "express";
import bodyParser from "body-parser";
import knex from "./database_client.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const apiRouter = express.Router();

app.use(bodyParser.json());

// Health check – lists all tables in the database
apiRouter.get("/", async (req, res) => {
  const SHOW_TABLES_QUERY =
    process.env.DB_CLIENT === "pg"
      ? "SELECT * FROM pg_catalog.pg_tables;"
      : "SHOW TABLES;";
  const [tables] = await knex.raw(SHOW_TABLES_QUERY);
  res.json({ tables });
});

// Returns all meals from the 'meal' table
apiRouter.get("/meals", async (req, res) => {
  const [meals] = await knex.raw("SELECT * FROM meal");
  res.json(meals);
});

// Returns all reservations
apiRouter.get("/reservations", async (req, res) => {
  const [reservations] = await knex.raw("SELECT * FROM reservation");
  res.json(reservations);
});

// Returns all reviews
apiRouter.get("/reviews", async (req, res) => {
  const [reviews] = await knex.raw("SELECT * FROM review");
  res.json(reviews);
});

// Returns meals scheduled after current time
apiRouter.get("/future-meals", async (req, res) => {
  const [meals] = await knex.raw("SELECT * FROM meal WHERE `when` > NOW()");
  res.json(meals);
});

// Returns meals that occurred in the past
apiRouter.get("/past-meals", async (req, res) => {
  const [meals] = await knex.raw("SELECT * FROM meal WHERE `when` < NOW()");
  res.json(meals);
});

// Returns all meals ordered by their ID
apiRouter.get("/all-meals", async (req, res) => {
  const [meals] = await knex.raw("SELECT * FROM meal ORDER BY id");
  res.json(meals);
});

// Returns the meal with the lowest ID
apiRouter.get("/first-meal", async (req, res) => {
  const [meal] = await knex.raw("SELECT * FROM meal ORDER BY id ASC LIMIT 1");
  if (!meal.length) {
    return res.status(404).json({ error: "No meals found" });
  }
  res.json(meal[0]);
});

// Returns the meal with the highest ID
apiRouter.get("/last-meal", async (req, res) => {
  const [meal] = await knex.raw("SELECT * FROM meal ORDER BY id DESC LIMIT 1");
  if (!meal.length) {
    return res.status(404).json({ error: "No meals found" });
  }
  res.json(meal[0]);
});
// Returns the meal with the highest number of reservations
app.use("/api", apiRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API server is running at http://localhost:${PORT}`);
});
