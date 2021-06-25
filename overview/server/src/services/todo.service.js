const httpStatus = require('http-status');
const { Todo } = require('../models');
const ApiError = require('../utils/ApiError');

const createTodo = async (todoBody) => {
  const todo = await Todo.create(todoBody);
  return todo;
};

const queryTodos = async () => {
  const todos = await Todo.find({});
  return todos;
};

const getTodoById = async (id) => {
  return Todo.findById(id);
};

const updateTodoById = async (id, updateBody) => {
  const todo = await getTodoById(id);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  Object.assign(todo, updateBody);
  await todo.save();
  return todo;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteTodoById = async (id) => {
  const todo = await getTodoById(id);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  await todo.remove();
  return todo;
};

module.exports = {
  createTodo,
  getTodoById,
  queryTodos,
  updateTodoById,
  deleteTodoById,
};
