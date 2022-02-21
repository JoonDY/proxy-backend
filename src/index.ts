import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { mountRoutes } from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app: Application = express();

mountRoutes(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
