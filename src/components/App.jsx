import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';

import Layout from './Loyout/Loyout';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));

const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
