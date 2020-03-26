const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors()); //leave empty for development
//Inform to JS api that the body requests will be received in JSON format.
app.use(express.json());
app.use(routes);

app.listen(3333);
