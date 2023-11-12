import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { GetMovieById, IMAGE_URL, PLACEHOLDER } from 'components/api/api';
import { onHandingError } from 'components/api/error_handling';
import {
  BackBtn,
  DetailsList,
  FilmDescription,
  FilmImg,
  FilmSubTitle,
  FilmTitle,
  FilmWrapper,
  NavLinks,
  StyledListDescr,
  TitleDetails,
} from './MoviesDetails.style';
import Loader from 'components/Loader/Loader';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setLoader(true);
        const movieById = await GetMovieById(movieId);
        setMovie(movieById);
      } catch (error) {
        onHandingError();
      } finally {
        setLoader(false);
      }
    };
    fetchMovieById();
  }, [movieId]);

  if (loader) {
    return <Loader />;
  }

  const getYear = () => new Date(movie.release_date).getFullYear();
  return (
    <>
      <span>
        <BackBtn to={backLinkHref}>Go back</BackBtn>
      </span>
      <FilmWrapper>
        <FilmImg
          src={movie.poster_path ? IMAGE_URL + movie.poster_path : PLACEHOLDER}
          width={200}
          height={300}
          alt="original_title"
        />
        <div>
          <FilmTitle>{movie.original_title}</FilmTitle>
          <FilmDescription>({getYear()})</FilmDescription>
          <FilmSubTitle>
            Rating: {Math.round(movie.vote_average * 100) / 100}
          </FilmSubTitle>
          <FilmSubTitle>Overview</FilmSubTitle>
          <FilmDescription>{movie.overview}</FilmDescription>
          <StyledListDescr>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </StyledListDescr>
        </div>
      </FilmWrapper>
      <div>
        <TitleDetails>Additional information</TitleDetails>
        <DetailsList>
          <li>
            <NavLinks to="cast" state={location.state}>
              Cast
            </NavLinks>
          </li>
          <li>
            <NavLinks to="reviews" state={location.state}>
              Reviews
            </NavLinks>
          </li>
        </DetailsList>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
