import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

import {GetMovieById, IMAGE_URL, PLACEHOLDER } from 'components/api/api';
import { onHandingError } from 'components/api/error_handling';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await GetMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        onHandingError();
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <span>
        <Link to={backLinkHref}>
          Go back
        </Link>
      </span>
      <div>
        <img
          src={movie.poster_path ? IMAGE_URL + movie.poster_path : PLACEHOLDER}
          alt="get"
        />
        <div>
          <h2>{movie.original_title}</h2>
          <p>Rating: {Math.round(movie.vote_average)}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <ul>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;