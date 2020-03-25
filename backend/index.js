const express = require('express');

const app = express();

//Inform to JS api that the body requests will be received in JSON format.
app.use(express.json());

app.post('/users', (request, response) => {
    return response.json({
        evento:"Semana omnistack",
        Aluno:"Andre"
    });
});

app.get('/', (request, response) => {
    return response.json({
        evento:"Semana omnistack",
        Aluno:"Andre"
    });
});

app.listen(3333);
