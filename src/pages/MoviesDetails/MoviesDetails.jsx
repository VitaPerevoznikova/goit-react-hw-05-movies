import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { GetMovieById, IMAGE_URL, PLACEHOLDER } from 'components/api/api';
import { onHandingError } from 'components/api/error_handling';

import {
  BackBtnLink,
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

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [loader, setLoader] = useState(false);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

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
        <BackBtnLink to={backLinkHref.current}>Go back</BackBtnLink>
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
          <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
