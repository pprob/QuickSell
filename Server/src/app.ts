import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { signupRouter } from './routes/createUser';
import errorHandler from './middlewares/error-handler';

const app = express();

app.use(json());
app.use('/api', signupRouter);

app.use(errorHandler);

export default app;
