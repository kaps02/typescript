import express from 'express'
import bodyParser from "body-parser"
import todoRoute from './routes/todos';

const app = express();

app.use(todoRoute);
app.use(bodyParser);

app.listen(3000);