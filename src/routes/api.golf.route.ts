import express from 'express';
import {
  getCourses,
  setCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/api.golf.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/courselist', authenticate, getCourses);
router.post('/courselist', setCourse);
router.put('/courselist/:id', updateCourse);
router.delete('/courselist/:id', deleteCourse);

export { router as golfRouter };
