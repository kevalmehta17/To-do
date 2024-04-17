const express = require("express");
const { createTodo, updateTod } = require("./types");
const { Todo } = require("./db");
const app = express();
const port = 1000;
app.use(express.json());
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the Wrong Input",
    });
    return;
  }
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(200).json({
    msg: "Todo is Created",
  });
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      List: todos,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTod.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You Updated Wrong Inputs",
    });
    return;
  }
  await Todo.findOneAndUpdate(
    { _id: req.body.id }, // The query to find the document
    { completed: true } // The update to be applied
  );

  res.json({
    msg: "Task is Completed ",
  });
});

app.delete("/", (req, res) => {});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
