import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import SearchForm from "components/SearchForm/SearchForm";
import { GetMovieBySearch } from "components/api/api";
import { onHandingError } from "components/api/error_handling";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await GetMovieBySearch(currentQuery);
        setMovies(movieByQuery);
      } catch (error) {
        onHandingError()
      }
      finally{
        setLoader(false);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

    return (
      <>
       {loader && <Loader />}
     <SearchForm onSubmit={setSearchParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
      </>
    );
  };

export default Movies;