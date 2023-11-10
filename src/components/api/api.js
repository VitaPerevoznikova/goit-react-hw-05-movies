import axios from 'axios';
import { Notify } from 'notiflix';
import { paramsNotify } from './error_handling';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '715f5dfcd0365ce887a7dfc6240d5986';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const PLACEHOLDER = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

const TrendingMovie = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
      return data.results;
    } catch (error) {
     Notify.failure('Oops! Something went wrong!',paramsNotify);
    }
  };

  export default TrendingMovie;

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

  export const GetMovieBySearch = async query => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
      );
  
      return data.results;
    } catch (error) {
      Notify.failure('Oops! Something went wrong!',paramsNotify);
    }
  };