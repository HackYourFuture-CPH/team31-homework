import express from "express";
import portfinder from "portfinder";
import { router } from "./router.js";

const app = express();
app.use(express.json());
app.use("/", router);

// IUSED PORTFINDER TO FIND AN AVAILABLE PORT FOR EXPERIMENTAL/LEARNING PURPOSE

try {
  portfinder.basePort = 3000;
  const port = await portfinder.getPortPromise();

  app.listen(port, () => {
    console.log("Server started successfully on port", port);
  });
} catch (err) {
  console.error("ERROR: No Port Available:", err);
}
