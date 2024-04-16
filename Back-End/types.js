const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTod = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTod: updateTod,
};
