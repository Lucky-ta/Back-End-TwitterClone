import express, { Express } from 'express';
import cors from 'cors';
import { tweetRouter } from './routes/tweetRouter';
import { userRouter } from './routes/userRouter';

const app: Express = express();

const corsOptions = {
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
    optionsSuccessStatus: 200,
};

app.use(express.json());

app.use(cors(corsOptions));

app.use('/user', userRouter);
app.use('/tweet', tweetRouter);

export { app };
