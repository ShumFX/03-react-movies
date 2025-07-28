import axios, { AxiosResponse } from 'axios';
import { MovieResponse } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const token = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<MovieResponse> => {
  const config = {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response: AxiosResponse<MovieResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    config
  );

  return response.data;
};