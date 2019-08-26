import { expect } from 'chai';
import * as supertest from 'supertest';
import { expressServer } from '../../../../container/express';

describe('Lessons:1 todo', () => {
    it('should gothrough', async () => {
        const res = await supertest(expressServer)
            .post('/todo')
            .send({ text: 'blabla', done: false })
            .set('Accept', 'application/json')
            .expect(201);
        expect(res.body).to.have.property('text', 'blabla');
    });
});
