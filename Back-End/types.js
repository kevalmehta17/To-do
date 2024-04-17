const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
  completed: zod.boolean().default(false),
});

const updateTod = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTod: updateTod,
};
