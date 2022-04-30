import jwt from 'jsonwebtoken';
import { RequestHandler } from 'express';
import { User } from '../models/user.model.js';

interface JwtPayload {
  id: string;
}

export const authenticate: RequestHandler = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const { id } = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as JwtPayload;

      req.user = await User.findById(id);

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: 'Not authorized' });
    }
  }
  if (!token) {
    res.status(401).json({ error: 'Not authorized' });
  }
};
