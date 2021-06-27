const faker = require('faker');
const status = require('../../../src/config/status');
const { Todo } = require('../../../src/models');

describe('Todo model', () => {
  describe('Todo validation', () => {
    let todo;

    beforeEach(() => {
      todo = {
        title: faker.lorem.lines(1),
        description: faker.lorem.paragraph(3),
        time: faker.date.recent(3, new Date()),
        status: faker.random.objectElement(status, 'value'),
      };
    });

    test('should correct validate a valid todo', async () => {
      await expect(new Todo(todo).validate()).resolves.toBeUndefined();
    });

    test('show give a error if status is not the valid values', async () => {
      todo.status = 'failed';
      await expect(new Todo(todo).validate()).rejects.toThrow();
    });

    test('show give a error if missing required fields', async () => {
      todo.title = '';
      todo.description = '';
      await expect(new Todo(todo).validate()).rejects.toThrow();
    });
  });
});
