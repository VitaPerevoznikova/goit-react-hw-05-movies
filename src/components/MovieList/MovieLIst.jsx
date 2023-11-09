import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { IMAGE_URL } from 'components/api/api';
import {
  GalleryCard,
  GalleryDescription,
  GalleryItem,
  GalleryItemImg,
} from './Movie.style';

const MoviesGallery = ({ movies }) => {
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
              src={IMAGE_URL + movie.poster_path}
              alt={movie.title}
              width={400}
            />
            <GalleryDescription>{movie.title}</GalleryDescription>
            <GalleryDescription>{movie.vote_average}</GalleryDescription>
          </Link>
        </GalleryItem>
      ))}
    </GalleryCard>
  );
};

export default MoviesGallery;
