import { prop, Typegoose } from 'typegoose';

export class Todo extends Typegoose {
    @prop({ required: true })
    text: string;

    @prop({ required: true })
    done: boolean;
}
