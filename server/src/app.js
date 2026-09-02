const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const env = require('./config/env');
const routes = require('./routes');
const { notFound } = require('./middleware/not-found.middleware');
const { errorHandler } = require('./middleware/error-handler.middleware');

const app = express();

app.use(express.json());
app.use(cors(env.cors));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', 1); // Necesario para que las cookies seguras funcionen detrás de Render
app.use(session(env.session));

app.use(routes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;