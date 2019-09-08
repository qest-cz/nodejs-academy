import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export const jwtWay = express
    .Router()
    .get('/secured', (req, res) => {
        res.render('jwt-secured.mustache', { username: 'unauthorized' });
    })
    .get('/secret', async (req, res) => {
        try {
            const decodeed = (await jwt.verify(req.headers.authorization, 'secret')) as { username: string };
            res.json({ username: decodeed.username });
        } catch (e) {
            res.status(401).json('Unauthorized');
        }
    })
    .get('/login', (req, res) => {
        res.render('jwt-login.mustache', { err: null });
    })
    .post('/login', (req, res) => {
        if (req.body.password === 'Qest') {
            const username = req.body.username;
            const jwtToken = jwt.sign({ username }, 'secret');
            res.redirect(`/jwt/secured?authCode=${jwtToken}`);
        } else {
            res.render('jwt-login.mustache', { err: 'Unauthorized' });
        }
    });
