const express = require('express');

const app = express();

const listaTareas = require('./lista-tareas.json');

const port = 8000;

app.get('/', (req, res) => {

    res.send('Bienvenido');

});

app.get('/listaTareas', (req, res) => {

    res.send({listaTareas});

});

app.listen(port, () => {

    console.log(`Servidor ejecutandose en \n http://localhost${port}`);

});

