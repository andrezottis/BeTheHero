const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento:"Semana omnistack",
        Aluno:"Andre"
    });
});

app.listen(3333);

//aaa