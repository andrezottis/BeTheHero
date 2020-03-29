const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();

app.use(cors()); //leave empty for development
//Inform to JS api that the body requests will be received in JSON format.
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);
