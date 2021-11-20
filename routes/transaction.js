import express from "express";

const transactionRouter = express.Router();

transactionRouter.get("/", (req, res) => {
  res.send("I ama in books");
});

export { transactionRouter };
