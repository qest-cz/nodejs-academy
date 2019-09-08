import * as express from 'express';

const parseBasicAuthHeader = (header: string) => {
    const arr = header.split(' ');
    if (arr[0] !== 'Basic' || arr.length !== 2) {
        throw new Error('No basic auth');
    }

    const parsed = new Buffer(arr[1], 'base64').toString().split(':');
    return { username: parsed[0], password: parsed[1] };
};

export const basic = express
    .Router()
    .get('/secured', (req, res) => {
        res.set('WWW-Authenticate', 'Basic');
        res.set('Proxy-Authenticate', 'Basic');
        if (req.headers.authorization) {
            const { password, username } = parseBasicAuthHeader(req.headers.authorization);

            if (password === 'Qest') {
                res.render('basic-secured.mustache', { username });
            } else {
                res.status(401).json('Unauthorized');
            }
        } else {
            res.status(401).json('Unauthorized');
        }
    })
    .get('/logout', (req, res) => {
        res.status(401).json('401');
    });
