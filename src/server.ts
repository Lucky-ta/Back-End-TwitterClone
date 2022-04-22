import { Request, Response } from 'express';
import { app } from './app';

const PORT = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server runing on port: ${PORT}`);
});
