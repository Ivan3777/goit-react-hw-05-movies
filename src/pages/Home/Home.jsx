import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'Services/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css'

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);
  return (
    <div>
      <h2 className={css.title}>TRENDING TODAY</h2>
      <MoviesList movies={movies} />
    </div>
  );
};
