import faker from 'faker';
import Todo from '@app/models/todo.model';
import { status } from '@app/config/status';

describe('Todo model', () => {
  describe('Todo validation', () => {
    let todo: {
      title: string;
      description: string;
      time: Date;
      status: string;
    };

    beforeEach(() => {
      todo = {
        title: faker.lorem.lines(1),
        description: faker.lorem.paragraph(3),
        time: faker.date.recent(3, new Date()),
        status: faker.random.objectElement(status, 'value'),
      };
    });

    test('should correct validate a valid todo', async () => {
      console.log(Todo, todo);

      await expect(await Todo.create(todo)).resolves.toBeUndefined();
      // let error = null;
      // try {
      //   const testTodo = await Todo.create({ ...todo });
      //   await testTodo.validate();
      // } catch (e) {
      //   error = e;
      // }
      // expect(error).toBeNull();
    });

    // test('show give a error if status is not the valid values', async () => {
    //   todo.status = 'failed';
    //   let error = null;
    //   try {
    //     const testTodo = await Todo.create({ ...todo });
    //     await testTodo.validate();
    //   } catch (e) {
    //     error = e;
    //   }
    //   expect(error).not.toBeNull();
    // });

    // test('show give a error if missing required fields', async () => {
    //   todo.title = '';
    //   todo.description = '';
    //   let error = null;
    //   try {
    //     const testTodo = await Todo.create({ ...todo });
    //     await testTodo.validate();
    //   } catch (e) {
    //     error = e;
    //   }
    //   expect(error).not.toBeNull();
    // });
  });
});
