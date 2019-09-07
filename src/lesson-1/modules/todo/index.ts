import { NextFunction, Request, Response } from 'express';
import * as _ from 'lodash';
import { TodoItemModel } from '../../container/model';

export const todoAddController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newItem = await TodoItemModel.create({ text: req.body.data });

        res.statusMessage = `New Item was created: ${req.body.data}`;
        res.statusCode = 201;
        res.send({ id: newItem._id });
    } catch (error) {
        if (error.message === 'Not found') {
            return res.status(404).json({ message: error });
        }
        next(error);
    }
};

export const todoGetListController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const retVal = [];
        await TodoItemModel.find((condition: any, res) => {
            res.map((item) => {
                retVal.push({
                    id: item._id,
                    text: item.text,
                });
            });

            return retVal;
        });

        res.statusCode = 200;
        res.send(JSON.stringify(retVal));
    } catch (error) {
        if (error.message === 'Not found') {
            return res.status(404).json({ message: error });
        }
        next(error);
    }
};

export const todoDeleteController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.body;
        await TodoItemModel.findByIdAndDelete(id);

        res.statusCode = 200;
        res.send({ response: 'deleted' });
    } catch (error) {
        if (error.message === 'Not found') {
            return res.status(404).json({ message: error });
        }
        next(error);
    }
};

export const todoEditController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, text } = req.body;

        const edited = await TodoItemModel.findById(id);
        edited.text = text;
        await TodoItemModel.findByIdAndUpdate(id, edited);

        res.statusCode = 200;
        res.send({ response: edited });
    } catch (error) {
        if (error.message === 'Not found') {
            return res.status(404).json({ message: error });
        }
        next(error);
    }
};
