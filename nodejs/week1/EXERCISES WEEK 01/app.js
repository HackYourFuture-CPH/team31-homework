import express from "express";
import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

const app = express();
const port = 3000;

const myDbConnection = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
      <p>Currently you are on URL: ${req.originalUrl}</p>
      <br>
        <p>Hi. Server Running. Please go to 
          <a href="http://localhost:3000/info">http://localhost:3000/info</a> 
          for more functionality check.
        </p>
      </body>
    </html>
  `);
});

app.get("/info", async (req, res) => {
  const [rows] = await myDbConnection.raw("SELECT VERSION()");
  const mysqlVersion = rows[0]["VERSION()"];
  const nodeVersion = process.version;
  const description = rows[0]["description"] || "No description available";
  const author = rows[0]["author"] || "No author available";

  res.send(`
    <html>
      <body>
       <p>Currently you are on URL: ${req.originalUrl}</p>
      <br>
        <h2>Server Info</h2>
        
        <p><strong>Node.js Version:</strong> ${nodeVersion}</p>
        <p><strong>MySQL Version:</strong> ${mysqlVersion}</p>
        

        <h3>Add a New Record</h3>
        <form action="/add-user" method="POST">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Add User</button>
        </form>

        <h3>View All Users</h3>
        <form action="/users" method="GET">
          <button type="submit">Show All Users</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/add-user", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await myDbConnection("users").insert({
      name,
      email,
      password,
    });

    res.send(`
      <p>User added successfully!</p>
      <a href="/info">Back to Info Page</a>
    `);
  } catch (err) {
    res
      .status(500)
      .send(`<p>Error: ${err.message}</p><a href="/info">Back</a>`);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await myDbConnection("users").select(
      "id",
      "name",
      "email",
      "created_at"
    );

    const userRows = users
      .map(
        (user) => `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.created_at}</td>
        </tr>
      `
      )
      .join("");

    res.send(`
      <html>
        <body>
          <h2>User List</h2>
          <table border="1" cellpadding="5">
            <thead>
              <tr><th>ID</th><th>Name</th><th>Email</th><th>Created At</th></tr>
            </thead>
            <tbody>${userRows}</tbody>
          </table>
          <br />
          <a href="/info">Back to Info Page</a>
        </body>
      </html>
    `);
  } catch (err) {
    res
      .status(500)
      .send(
        `<p>Error fetching users: ${err.message}</p><a href="/info">Back</a>`
      );
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//I tried thses and all commands were working.
// 1. $ npm init -y
// 2. $ npm pkg set type="module"
// 3. $ npm install express
// 4. $ echo node_modules/ >> .gitignore .... it ignores node_modules folder from git
// 5. $ node app.js
// 6. $ curl -i localhost:3000/info .... it shows responce content type as application/json
// 7. $ curl -i localhost:3000 .... it shows responce content type as text/html
// 8. $ npm install mysql2 knex
// 9. $ npm install --save-dev nodemon .... it is used to run the app in dev mode and auto restart the server on file changes
// 10. $ npm pkg set scripts.dev="nodemon app.js"
// 11. $ npm run dev .... it runs the app in dev mode and auto restart the server on file changes
// 12. $ npm install dotenv .... it is used to load environment variables from .env file
// 13. $ echo .env >> .gitignore
