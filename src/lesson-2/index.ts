import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as session from 'express-session';
import * as mustacheExpress from 'mustache-express';
import { basic } from './basic-auth';
import { jwtWay } from './jwt';
import { sessions } from './sessions';

express()
    .engine('mustache', mustacheExpress())
    .set('view engine', 'mustache')
    .set('views', `${__dirname}/views`)

    .use(
        session({
            resave: false,
            secret: 'test',
            saveUninitialized: true,
            cookie: {
                maxAge: 30000,
                httpOnly: true,
            },
        }),
    )
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/sessions', sessions)
    .use('/basic', basic)
    .use('/jwt', jwtWay)
    .listen(8080);
