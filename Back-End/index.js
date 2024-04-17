const express = require("express");
const { createTodo, updateTod } = require("./types");
const app = express;
app.use(express.json());
app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the Wrong Input",
    });
    return;
  }
});
app.get("/todos", (req, res) => {});
app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTod.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You Updated Wrong Inputs",
    });
    return;
  }
});
app.delte("/", (req, res) => {});
