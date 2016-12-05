import express from 'express';
import consign from 'consign';

const app = express();

consign({verbose: false})
    .include('lib/config.js')
    .then('db.js')
    .then('auth.js')
    .then('lib/middlewares.js')
    .then('routes')
    .then('lib/boot.js')
    .into(app);

module.exports = app;