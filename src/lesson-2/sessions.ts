import * as express from 'express';

export const sessions = express
    .Router()
    .get('/', (req, res) => {
        req.session.pageView = req.session.pageView ? ++req.session.pageView : 1;
        res.json({
            pageView: req.session.pageView,
            sessionExpired: req.session.cookie.maxAge,
        });
    })
    .get('/login', (req, res) => {
        res.render('login.mustache', { err: null });
    })
    .post('/login', (req, res) => {
        if (req.body.password === 'Qest') {
            req.session.isLoggedIn = true;
            req.session.username = req.body.username;
            res.redirect('/sessions/secured');
        } else {
            res.render('login.mustache', { err: 'Unauthorized' });
        }
    })
    .get('/secured', (req, res) => {
        if (!req.session.isLoggedIn) {
            res.render('unauthorized.mustache');
        } else {
            res.render('secured.mustache', { username: req.session.username });
        }
    })
    .get('/logout', (req, res) => {
        req.session.destroy((err) => {
            res.redirect('/sessions/login');
        });
    });
