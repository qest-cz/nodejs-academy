import { NextFunction, Request, Response } from 'express';

export const statusController = (appName: string) => async (req: Request, res: Response, next: NextFunction) => {
    res.json({ appName });
};
