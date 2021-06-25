const mongoose = require('mongoose');
const status = require('../config/status');

const todoSchema = mongoose.Schema({
  name: {
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
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
