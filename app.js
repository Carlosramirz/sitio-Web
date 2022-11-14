const express = require('express');
const path = require('path');

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use(require('./src/routes/index'));
app.use('/', express.static(path.join(__dirname, 'public')))


app.listen(3000);
console.log('Server en el puerto 3000');