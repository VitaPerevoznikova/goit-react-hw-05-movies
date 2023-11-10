import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { IMAGE_URL, PLACEHOLDER } from 'components/api/api';
import {
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
        <GalleryItem key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <GalleryItemImg
              src={
                movie.poster_path ? IMAGE_URL + movie.poster_path : PLACEHOLDER
              }
              alt={movie.title}
              width={400}
            />
            <GalleryDescription>{movie.original_title}</GalleryDescription>
          </Link>
        </GalleryItem>
      ))}
    </GalleryCard>
  );
};

export default MovieList;
