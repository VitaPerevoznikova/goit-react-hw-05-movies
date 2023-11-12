import MovieList from 'components/MovieLists/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { GetMovieBySearch } from 'components/api/api';
import { onHandingError } from 'components/api/error_handling';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentQuery = searchParams.get('query');

  useEffect(() => {
    
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await GetMovieBySearch(currentQuery);
        setMovies(movieByQuery);
      } catch (error) {
        onHandingError();
      }
    };
    fetchMovieByQuery();
  }, [currentQuery]);

  const onSubmitForm = value => {
    const searchValue = value.trim().toLowerCase().split(' ').join('+');

    if (searchValue === '') {
      setSearchParams({});
      setMovies([]);
      Notify.info('Enter your request, please!');
      return;
    }

    if (searchValue === currentQuery) {
      Notify.info('Enter new request, please!');
      return;
    }
    setSearchParams({ query: searchValue });
    setMovies([]);
  };


  return (
    <>
      <SearchForm onSubmitForm={onSubmitForm} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
