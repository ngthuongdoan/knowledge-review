const mongoose = require('mongoose');
const status = require('../config/status');
const ObjectId = mongoose.Schema.ObjectId;

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: status,
    default: 'none',
  },
});

/**
 * @typedef Todo
 */
const Todo = mongoose.model('Todo', todoSchema, 'Todo');

module.exports = Todo;
