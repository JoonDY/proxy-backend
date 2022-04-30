import { Request, Response } from 'express';
import { Course } from '../models/course.model.js';

export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const setCourse = async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).json({ error: 'Please enter appropriate fields.' });
    return;
  }

  try {
    const course = await Course.create(req.body);
    res.status(200).send(course);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      res.status(400).json({ error: 'Course not found' });
      return;
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({ message: `Updated` });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      res.status(400).json({ error: 'Course not found' });
      return;
    }

    await course.remove();
    res.status(200).json({ message: `Course deleted`, id: `${req.params.id}` });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// export const getScoreCard = async (req: Request, res: Response) => {
//   try {
//     res.send('Working');
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };
