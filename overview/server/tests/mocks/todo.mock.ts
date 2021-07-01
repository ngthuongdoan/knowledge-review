import faker from 'faker';
import Todo from '@app/models/todo.model';
import { status } from '@app/config/status';

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

const insertTodos = async (todos: object[]) => {
  await Todo.insertMany(todos.map((todo: object) => ({ ...todo })));
};
export { todoOne, todoTwo, insertTodos };
