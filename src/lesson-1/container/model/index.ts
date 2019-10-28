import * as mongoose from 'mongoose';
import { TodoItem } from '../../modules/todo/model/todo';

// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds213178.mlab.com:13178/nodejs-academy');
mongoose.connect('mongodb://localhost:27017/academy');

export const TodoItemModel = new TodoItem().getModelForClass(TodoItem);
