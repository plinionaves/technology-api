import express from 'express';
import consign from 'consign';

const app = express();

consign()
    .include('models')
    .then('lib/middlewares.js')
    .then('routes')
    .then('lib/boot.js')
    .into(app);