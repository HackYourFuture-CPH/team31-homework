import fs from "fs/promises";

export const getDocument = async () => JSON.parse(await fs.readFile("./document.json", "utf8"));
