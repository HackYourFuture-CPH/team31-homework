import { dbClient } from "./database.js";
import express from "express";

async function getAllUsers() {
  return await dbClient.select("title").from("meal").where("id", 2);
}

console.log(await getAllUsers());
