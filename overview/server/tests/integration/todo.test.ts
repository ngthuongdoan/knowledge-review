import request from 'supertest';
import httpStatus from 'http-status';
import app from '@app/app';
import setupTestDB from '../utils/setupTestDB';
import { insertTodos, todoOne, todoTwo } from '../mocks/todo.mock';

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
