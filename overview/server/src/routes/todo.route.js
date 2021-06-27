const express = require('express');
const todoController = require('../controllers/todo.controller');
const validate = require('../middlewares/validate');
const { todoValidation } = require('../validations');

const router = express.Router();
router
  .route('/')
  .get(validate(todoValidation.getTodos), todoController.getTodos)
  .post(validate(todoValidation.createTodo), todoController.createTodo);

router
  .route('/:id')
  .get(validate(todoValidation.getTodo), todoController.getTodo)
  .patch(validate(todoValidation.updateTodo), todoController.updateTodo)
  .delete(validate(todoValidation.deleteTodo), todoController.deleteTodo);

module.exports = router;
