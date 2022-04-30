import mongoose from 'mongoose';

// Database connection
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
