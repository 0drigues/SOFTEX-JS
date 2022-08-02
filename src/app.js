import express from 'express';
import routes from './routes';
const app = express();
const port = 3000;

const standardRouter = require('./routes/standard.router');

app.use(express.json());

app.use(standardRouter);

app.listen(port);