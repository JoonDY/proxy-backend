import got from 'got';
import { Request, Response } from 'express';
import url, { URLSearchParams } from 'url';

export const getWeather = async (req: Request, res: Response) => {
  const API_BASE_URL_WEATHER: string = process.env.API_BASE_URL_WEATHER!;
  const API_KEY_NAME_WEATHER: string = process.env.API_KEY_NAME_WEATHER!;
  const API_KEY_VALUE_WEATHER: string = process.env.API_KEY_VALUE_WEATHER!;

  try {
    const params: URLSearchParams = new URLSearchParams({
      [API_KEY_NAME_WEATHER]: API_KEY_VALUE_WEATHER,
    });

    const query = url.parse(req.url, true).query;

    for (const key in query) {
      params.append(key, query[key] as string);
    }

    const data = await got(`${API_BASE_URL_WEATHER}?${params}`).json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getStock = async (req: Request, res: Response) => {
  const API_BASE_URL_STOCK: string = process.env.API_BASE_URL_STOCK!;
  const API_KEY_NAME_STOCK: string = process.env.API_KEY_NAME_STOCK!;
  const API_KEY_VALUE_STOCK: string = process.env.API_KEY_VALUE_STOCK!;

  try {
    const params: URLSearchParams = new URLSearchParams({
      [API_KEY_NAME_STOCK]: API_KEY_VALUE_STOCK,
    });

    const query = url.parse(req.url, true).query;

    for (const key in query) {
      params.append(key, query[key] as string);
    }

    console.log(params.toString());
    console.log(`${API_BASE_URL_STOCK}?${params}`);

    const data = await got(`${API_BASE_URL_STOCK}?${params}`).json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getActivity = async (req: Request, res: Response) => {
  const API_BASE_URL_ACTIVITY: string = process.env.API_BASE_URL_ACTIVITY!;

  try {
    const data = await got(`${API_BASE_URL_ACTIVITY}`).json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getJoke = async (req: Request, res: Response) => {
  const API_BASE_URL_JOKE: string = process.env.API_BASE_URL_JOKE!;

  try {
    const data = await got(`${API_BASE_URL_JOKE}`).json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getQuote = async (req: Request, res: Response) => {
  const API_BASE_URL_QUOTE: string = process.env.API_BASE_URL_QUOTE!;

  try {
    const data = await got(`${API_BASE_URL_QUOTE}`).json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getDog = async (req: Request, res: Response) => {
  const API_BASE_URL_DOG: string = process.env.API_BASE_URL_DOG!;

  try {
    const data = await got(`${API_BASE_URL_DOG}`).json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getCat = async (req: Request, res: Response) => {
  const API_BASE_URL_CAT: string = process.env.API_BASE_URL_CAT!;

  try {
    const data = await got(`${API_BASE_URL_CAT}`).json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};
