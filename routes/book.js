import express from "express";

const bookRouter = express.Router();

bookRouter.get("/", (req, res) => {
  res.send("I ama in books");
});

export { bookRouter };
