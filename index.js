import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

import { bookRouter } from "./routes/book";
import { transactionRouter } from "./routes/transaction";
import { userRouter } from "./routes/user";

const routes = [bookRouter, transactionRouter, userRouter];

app.get("/", (req, res) => {
  res.send("Health check");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
