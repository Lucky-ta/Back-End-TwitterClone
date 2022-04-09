import express, { Express } from 'express';
import { userRouter } from './routes/routes';

const app: Express = express();

app.use(express.json());

app.use('/user', userRouter);

export { app };
