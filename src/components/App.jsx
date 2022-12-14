import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Nav } from './Navigation/Navigation';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="*" />
        <Route path="movies" element={<Movies />} />
        <Route path="*" />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="*" />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" />
        </Route>
      </Routes>
    </div>
  );
};
