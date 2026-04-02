import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  const safeSort = ["id", "first_name", "last_name", "email", "phone"];
  const safeDirection = ["asc", "desc"];
  const request = req.query.sort.toString().toLowerCase();
  let sortBy = "id";
  let directBy = "asc";

  // I did it as for loop, because our entry might be not perfect.
  // This accepts entries such as:
  // ?sort=id asc || ?sort=id desc || ?sort=id aaaaaasccccc || ?sort=id DDdddEScCcccc
  // ?sort="id" - = ++ 22222333 "asc" :D

  for (let i = 0; i < safeSort.length; i++) {
    if (request.includes(safeSort[i])) {
      sortBy = safeSort[i] || "id";
      break;
    }
  }
  for (let i = 0; i < safeDirection.length; i++) {
    if (request.includes(safeDirection[i])) {
      directBy = safeDirection[i] || "asc";
      break;
    }
  }

  query = query.orderBy(sortBy, directBy);

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
