import { Request, Response } from 'express';
import { User } from '../models/user.model.js';
import { hashFunc, comparePw, generateToken } from '../authentication.js';

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // Check if all required fields are passed
  if (!username || !email || !password) {
    res.status(400).json({ error: 'Please fill all required fields' });
    return;
  }

  const userExists = await User.findOne({ email });

  // Check if user already exists
  if (userExists) {
    res.status(400).json({ error: 'User already exists' });
    return;
  }

  // Hash password and create user
  try {
    const hashedPassword = await hashFunc(password);

    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ error: 'Registration failed' });
      return;
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Authenticate user and return token if successful
    if (user && (await comparePw(password, user.password))) {
      res.json({
        _id: user.id,
        username: user.username,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
      return;
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
