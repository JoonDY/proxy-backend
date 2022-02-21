import express, { Request, Response } from 'express';
import {
  getWeather,
  getStock,
  getActivity,
  getJoke,
  getQuote,
  getDog,
  getCat,
} from '../controllers/api.controller.js';

const router = express.Router();

router.get('/weather', getWeather);
router.get('/stock', getStock);
router.get('/activity', getActivity);
router.get('/joke', getJoke);
router.get('/quote', getQuote);
router.get('/dog', getDog);
router.get('/cat', getCat);

export { router as api };
