import axios from 'axios';
import { Notify } from 'notiflix';

export const paramsNotify = {
    position: 'center-center',
    timeout: 3000,
    width: '400px',
    fontSize: '24px',
  };

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '715f5dfcd0365ce887a7dfc6240d5986';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w400/';

export const TrendingMovie = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
      return data.results;
    } catch (error) {
     Notify.failure('Oops! Something went wrong!',paramsNotify);
    }
  };

  export const GetGenre = async () => {
    try {
      const { genres } = await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
      return genres;
    } catch (error) {
      Notify.failure('Oops! Something went wrong!',paramsNotify);
    }
  };

  export const GetMovieById = async id => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      return data;
    } catch (error) {
     Notify.failure('Oops! Something went wrong!',paramsNotify);
    }
  };

  export const GetMovieBySearch = async q => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${q}&include_adult=false`
      );
  
      return data.results;
    } catch (error) {
      Notify.failure('Oops! Something went wrong!',paramsNotify);
    }
  };