import knex from "knex";
import dotenv from "dotenv";

// Load environment variables from .env file

dotenv.config();

const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

export default knexInstance;
