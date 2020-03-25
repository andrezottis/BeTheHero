const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    return response.json({
        evento:"Semana omnistack",
        Aluno:"Andre"
    });
});

routes.get('/', (request, response) => {
    return response.json({
        evento:"Semana omnistack",
        Aluno:"Andre"
    });
});

module.exports = routes;