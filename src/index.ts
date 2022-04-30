import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { mountRoutes } from './routes/index.js';
import { connectDB } from './config/db.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mountRoutes(app);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
