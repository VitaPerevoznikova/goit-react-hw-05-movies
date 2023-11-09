import { Route, Routes } from 'react-router-dom';
import Layout from './Header/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
