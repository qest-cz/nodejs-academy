import { NextFunction, Request, Response } from 'express';
import * as _ from 'lodash';
export const statusController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.sendFile(__dirname + '/index.html');
    } catch (error) {
        if (error.message === 'Not found') {
            return res.status(404).json({ message: error });
        }
        next(error);
    }
};
