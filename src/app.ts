import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (_req: Request, res: Response): void => {
  res.send('IPlayed!');
});

export default app
