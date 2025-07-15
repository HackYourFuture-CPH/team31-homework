import knex from "knex";
import dotenv from "dotenv";
import { promisify } from "util";

dotenv.config();

export const dbClient = knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
