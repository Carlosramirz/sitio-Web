const express = require('express');
const path = require('path');
const pool = require('./db')

const app = express();

//middleware
app.use('/', express.static(path.join(__dirname, 'public')))

//ROUTES

//get all products

//get product by id

app.listen(3000, () => {
    console.log('Server funcionando')
}); 