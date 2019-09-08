import * as express from 'express';
// import * as jwt from 'jsonwebtoken';

export const jwtWay = express
    .Router()
    .get('/secured', (req, res) => {})
    .get('/secret', async (req, res) => {})
    .get('/login', (req, res) => {})
    .post('/login', (req, res) => {});
