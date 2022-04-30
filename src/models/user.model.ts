import mongoose from 'mongoose';

interface User {
  username: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userdb = mongoose.connection.useDb('userdb');

export const User = userdb.model<User>('User', userSchema);
