const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kevalmehta:helloworld@cluster0.kxy1m20.mongodb.net/"
);

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = { Todo };
