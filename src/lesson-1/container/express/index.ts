import * as bodyParser from 'body-parser';
import * as express from 'express';
import { config } from '../../config';
import { statusController } from '../../modules/status';
import { todoAddController, todoGetListController, todoDeleteController, todoEditController } from '../../modules/todo';

export const expressServer = express()
    .use(bodyParser.json())
    .get('/', statusController)
    .get('/list', todoGetListController)
    .post('/list', todoAddController)
    .put('/list', todoEditController)
    .delete('/list', todoDeleteController)
    .use((err, req, res, next) => {
        if (err) {
            console.log(err);
        }

        res.status(500).json('PROBLEM');
    });

expressServer.listen(config.port).on('listening', () => console.log(`Express listening on port: localhost:${config.port}`));
