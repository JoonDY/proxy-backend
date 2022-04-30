import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const hashFunc = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePw = (password: string, hashedPw: string) => {
  return bcrypt.compare(password, hashedPw);
};

export const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '7d',
  });
};
