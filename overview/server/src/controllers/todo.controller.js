const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { todoService } = require('../services');

const createTodo = async (req, res) => {
  const todo = await todoService.createTodo(req.body);
  res.status(httpStatus.CREATED).send(todo);
};

const getTodos = async (req, res) => {
  const result = await todoService.queryTodos();
  res.send(result);
};

const getTodo = async (req, res) => {
  const todo = await todoService.getTodoById(req.params.id);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  res.send(todo);
};

const updateTodo = async (req, res) => {
  const todo = await todoService.updateTodoById(req.params.id, req.body);
  res.send(todo);
};

const deleteTodo = async (req, res) => {
  await todoService.deleteTodoById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
