import express from "express";
import fs from "fs/promises";
import z from "zod";
import knex from "knex";

export const db = knex({
  client: "better-sqlite3",
  // client: 'mysql2'
  connection: {
    filename: "./mydb.sqlite",
  },
});

async function createSchema() {
  // await db.schema.dropTable('users');
  const userTableExists = await db.schema.hasTable("users");
  // console.log(userTableExists);
  if (userTableExists) {
    console.log("we already created the database table");
    // db.schema.alterTable('users', (table) => {
    //     table.boolean('verified').defaultTo(false).alter();
    // })
  } else {
    console.log("creating schema");
    //  await db.schema.createTable("group", (table) => {
    // { id: number, username: string, email: string, verified: boolean }
    await db.schema.createTable("users", (table) => {
      table.increments();
      table.string("username").unique();
      table.string("email").unique();
      table.boolean("verified").defaultTo(false);
      table.integer("group_id").references("group.id").onDelete("CASCADE");
    });
  }
}

createSchema().then(() => {
  console.log("tables created");
});

console.log("starting");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const result = await fs.readFile("./static/index.html", "utf-8");
  const upatedFile = result.replaceAll("%APP_NAME%", process.env.APP_NAME);
  res.send(upatedFile);
  // res.sendFile('./static/index.html', { root: process.cwd() });
});

app.get("/users", async (req, res) => {
  try {
    const users = await db.raw("select * from users");
    console.log(users);
    res.send(users);
  } catch (e) {
    res.status(500).send("server error");
    console.log(e);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await db.raw(`select * from users where id = ${req.params.id}`);
    if (user.length === 0) {
      res.status(404).send("user not found");
      return;
    } else {
      res.send(user);
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("server error");
  }
});

const userSchema = z.object({
  username: z.string().min(4).max(50),
  email: z.string().email(),
});

app.post("/users", async (req, res) => {
  try {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
      res.send(result.error.issues[0].message);
    }

    const createdUser = await db
      .table("users")
      .insert({
        username: result.data.username,
        email: result.data.email,
      })
      .returning("*");

    res.status(201).send(createdUser);
  } catch (e) {
    if (e.message.includes("UNIQUE constraint")) {
      res.status(422).send(`user with email "${body.email}" or username "${body.username}" already exists`);
      return;
    }
    console.log(e);
    res.status(500).send("server error");
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const result = await db("users").where("id", req.params.id).del();
    if (result === 0) {
      res.status(404).send("user does not exit");
    } else {
      res.send("user deleted");
    }
  } catch (e) {
    res.status(500).send("server error");
  }
});

app.listen(process.env.PORT, () => {
  console.log("ready");
});
