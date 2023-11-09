import React, { useEffect, useState } from 'react';
import TrendingMovie from '../components/api/api';
import { onHandingError } from 'components/api/error_handling';
import MovieList from '../components/MovieList/MovieLIst';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (films.length > 0) {
      return;
    }

    TrendingMovie()
      .then(request => {
        setFilms(request.results);
      })
      .catch(onHandingError)
      .finally(() => setLoading(false));
  }, [films]);

  return (
    <div>
      <h1>Trending today</h1>

      {loading && <Loader />}
      <MovieList films={films} />
    </div>
  );
};
export default Home;
