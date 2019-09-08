import * as express from 'express';

// const parseBasicAuthHeader = (header: string) => {
//     const arr = header.split(' ');
//     if (arr[0] !== 'Basic' || arr.length !== 2) {
//         throw new Error('No basic auth');
//     }
//
//     const parsed = new Buffer(arr[1], 'base64').toString().split(':');
//     return { username: parsed[0], password: parsed[1] };
// };

export const basic = express
    .Router()
    .get('/secured', (req, res) => {
        // res.set('WWW-Authenticate', 'Basic');
        // res.set('Proxy-Authenticate', 'Basic');
    })
    .get('/logout', (req, res) => {

    });
