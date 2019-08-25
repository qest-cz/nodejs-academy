import * as supertest from 'supertest';
import { config } from '../../config';
import { expressServer } from '../../container/express';
import { expect } from 'chai';

describe('Lessons:1 status EP', () => {
    it('should gothrough', async () => {
        const res = await supertest(expressServer)
            .get('/')
            .expect(200);
        expect(res.body).to.have.property('appName', config.appName);
    });
});
