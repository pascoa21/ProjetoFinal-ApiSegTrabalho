const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


const index = require('./Routes/indexRoute')
const products = require('./Routes/productsRoute')

app.use('/', index);
app.use('/riscos', products)

module.exports = app;