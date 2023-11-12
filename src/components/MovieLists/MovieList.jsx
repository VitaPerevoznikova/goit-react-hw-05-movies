import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { IMAGE_URL, PLACEHOLDER } from 'components/api/api';
import {
  DescriptionContainer,
  GalleryCard,
  GalleryDescription,
  GalleryItem,
  GalleryItemImg,
} from './MovieList.style';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <GalleryCard>
      {movies.map(movie => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          state={{ from: location }}
        >
          <GalleryItem>
            <GalleryItemImg
              src={
                movie.poster_path ? IMAGE_URL + movie.poster_path : PLACEHOLDER
              }
              alt={movie.title}
              width={400}
            />
            <DescriptionContainer>
              <GalleryDescription>{movie.original_title}</GalleryDescription>
            </DescriptionContainer>
          </GalleryItem>{' '}
        </Link>
      ))}
    </GalleryCard>
  );
};

export default MovieList;
