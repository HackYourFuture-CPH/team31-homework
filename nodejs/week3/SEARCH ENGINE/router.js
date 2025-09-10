import express from "express";
import db from "./connection.js";

const router = express.Router();

// DEFAULT ROUTE

router.get("/", (req, res) => {
  res.send(
    `Welcome to the API. Use following routes <br><br>
    1. <b>/api/contacts</b> to get the contacts list.`
  );
});

// END POINT .GET /api/contacts?sort=first_name%20ASC OR /api/contacts?sort=last_name%20DESC
// This endpoint has a vulnerability where it allows SQL injection through the sort query parameter.
// The sort query parameter is directly used in the SQL query without validation or sanitization,
// Which can lead to arbitrary SQL code execution.

// router.get("/contacts", async (req, res) => {
//   let query = db.select("*").from("contacts");

//   if ("sort" in req.query) {
//     const orderBy = req.query.sort.toString();
//     if (orderBy.length > 0) {
//       query = query.orderByRaw(orderBy);
//     }
//   }

//   console.log("SQL", query.toSQL().sql);

//   try {
//     const data = await query;
//     res.json({ data });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// END POINT .GET /api/contacts?sort=first_name%20ASC
// THIS ENDPOINT IS NOT VULNERABLE TO SQL INJECTION
// USING allowedColumns and allowedDirections to prevent SQL injections so that other
// than the words added in allowedColumns and allowedDirections cannot be used to for the querry
// ONLY ["id", "first_name", "last_name", "email", "phone"] can be used as columns
// and ["ASC", "DESC"] can be used as directions

router.get("/contacts", async (req, res) => {
  try {
    const sortParam = req.query.sort || "id DESC";
    const [column, direction] = sortParam.split(" ");
    const allowedColumns = ["id", "first_name", "last_name", "email", "phone"];
    const allowedDirections = ["ASC", "DESC"];

    if (
      !allowedColumns.includes(column) ||
      !allowedDirections.includes(direction?.toUpperCase())
    ) {
      return res.status(400).json({ error: "Invalid sort parameter" });
    }

    const contacts = await db
      .select("*")
      .from("contacts")
      .orderBy(column, direction);

    res.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
