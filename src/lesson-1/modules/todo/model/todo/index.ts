import { prop, Typegoose } from 'typegoose';

export class TodoItem extends Typegoose {
    @prop({ required: true })
    text: string;
}
