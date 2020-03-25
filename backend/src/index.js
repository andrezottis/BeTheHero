const express = require('express');
const routes = require('./routes');
const app = express();

//Inform to JS api that the body requests will be received in JSON format.
app.use(express.json());
app.use(routes);


app.listen(3333);
