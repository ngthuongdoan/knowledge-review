const faker = require('faker');
const Todo = require('../../src/models/todo.model');
const status = require('../../src/config/status');

const todoOne = {
  title: faker.lorem.lines(1),
  description: faker.lorem.paragraph(3),
  time: faker.date.recent(3, new Date()),
  status: faker.random.objectElement(status, 'value'),
};
const todoTwo = {
  title: faker.lorem.lines(1),
  description: faker.lorem.paragraph(3),
  time: faker.date.recent(3, new Date()),
  status: faker.random.objectElement(status, 'value'),
};

const insertTodos = async (todos) => {
  await Todo.insertMany(todos.map((todo) => ({ ...todo })));
};

module.exports = {
  todoOne,
  todoTwo,
  insertTodos,
};
