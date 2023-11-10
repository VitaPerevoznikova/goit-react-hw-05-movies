import React, { useEffect, useState } from 'react';
import TrendingMovie from '../../components/api/api';
import { onHandingError } from 'components/api/error_handling';

import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieLists/MovieList';

import { MeinTitle } from './Home.module';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    TrendingMovie('')
      .then(setMovies)
      .catch(onHandingError)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <MeinTitle>Trending today</MeinTitle>

      {loading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};
export default Home;
