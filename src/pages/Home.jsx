import React, { useEffect, useState } from 'react';
import TrendingMovie from '../components/api/api';
import { onHandingError } from 'components/api/error_handling';

import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length > 0) {
      return;
    }

    TrendingMovie('')
      .then(setMovies)
      .catch(onHandingError)
      .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {loading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};
export default Home;
