import express, { Express } from 'express';
import cors from 'cors';
import { tweetRouter } from './routes/tweetRouter';
import { userRouter } from './routes/userRouter';

const app: Express = express();

app.use(express.json());

app.use(cors());

app.use('/user', userRouter);
app.use('/tweet', tweetRouter);

export { app };
