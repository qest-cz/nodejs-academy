import * as express from 'express';

export const sessions = express
    .Router()
    .get('/', (req, res) => {})
    .get('/login', (req, res) => {})
    .post('/login', (req, res) => {})
    .get('/secured', (req, res) => {})
    .get('/logout', (req, res) => {});
