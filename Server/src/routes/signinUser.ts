import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/users/signin', (req: Request, res: Response) => {
  const { email, password } = req.body;
});
