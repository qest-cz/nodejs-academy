import { Handler } from 'express';
import { TodoModel } from '../../../../container/model';

export const postTodoController: Handler = async (req, res, next) => {
    try {
        await TodoModel.create(req.body);
        res.status(201).json(req.body);
    } catch (e) {
        next(e);
    }
};
