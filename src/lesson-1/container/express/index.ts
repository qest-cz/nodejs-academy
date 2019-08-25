import * as bodyParser from 'body-parser';
import * as express from 'express';
import { config } from '../../config';
import { statusController } from '../../modules/status';

export const expressServer = express()
    .use(bodyParser.json())
    .get('/', statusController(config.appName));
// TODO add default error handler

expressServer.listen(config.port).on('listening', () => console.log('Express listening'));
