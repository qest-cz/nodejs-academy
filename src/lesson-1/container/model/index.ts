import * as mongoose from 'mongoose';
import { Todo } from '../../modules/todo/model/todo';

mongoose.connect('mongodb://localhost:27017/test');

// tslint:disable:variable-name
export const TodoModel = new Todo().getModelForClass(Todo);
