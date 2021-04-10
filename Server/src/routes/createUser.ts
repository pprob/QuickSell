import express, { Request, Response } from 'express';
import BadRequestError from '../errors/bad-request.error';
import User from '../models/user';
import { body, check } from 'express-validator';
import validateRequest from '../middlewares/validate-request';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post(
  '/users/signup',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').trim().notEmpty().withMessage('Please provide a password'),
    body('username')
      .trim()
      .notEmpty()
      .withMessage('Please provide a username')
      .isLength({ min: 4, max: 20 })
      .withMessage('username must be between 4 & 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, username, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email already exists');
    }

    const user = new User({ email, username, password });
    const userJwt = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET!,
    );

    user.authToken = userJwt;

    await user.save();

    res.set('Authorization', `Bearer ${userJwt}`);
    res.send({
      user,
    });
  },
);

export { router as signupRouter };
