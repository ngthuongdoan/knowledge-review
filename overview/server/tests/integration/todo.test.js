const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { Todo } = require('../../src/models');
const { insertTodos, todoOne, todoTwo } = require('../mocks/todo.mock');

setupTestDB();

describe('Todo route', () => {
  describe('GET /todo', () => {
    test('should return 200 and apply the default query options', async () => {
      await insertTodos([todoOne, todoTwo]);

      const res = await request(app).get('/todo').send().expect(httpStatus.OK);

      expect(res.body).toHaveLength(2);

      expect(res.body[0]).toMatchObject({
        title: todoOne.title,
        description: todoOne.description,
        time: todoOne.time.toISOString(),
        status: todoOne.status,
      });
    });
  });
});
