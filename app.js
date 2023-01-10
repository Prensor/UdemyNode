const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

//Handlebras
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials/');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Pedro Jibaja',
        titulo: 'Curso Node',
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Pedro Jibaja',
        titulo: 'Curso Node',
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Pedro Jibaja',
        titulo: 'Curso Node',
    });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});