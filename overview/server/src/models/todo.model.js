const mongoose = require('mongoose');
const status = require('../config/status');

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

todoSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret._v;
  },
});
const Todo = mongoose.model('Todo', todoSchema, 'Todo');

module.exports = Todo;
