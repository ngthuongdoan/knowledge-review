import mongoose, { Schema } from 'mongoose';
import { status } from '../config/status';

const todoSchema = new Schema({
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
  transform: function (doc: mongoose.Document, ret: any) {
    delete ret._id;
    delete ret._v;
  },
});
const Todo = mongoose.model('Todo', todoSchema, 'Todo');

export default Todo;
