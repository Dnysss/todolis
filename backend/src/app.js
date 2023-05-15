const express = require('express');
const router = require('./router')

const app = express();

//app.get('/', (request, response) => response.status(200).send('Hello, Friend!'));
app.use(express.json());
app.use(router);

module.exports = app;