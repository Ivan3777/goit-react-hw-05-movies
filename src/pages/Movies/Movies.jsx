import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'Services/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getMoviesByQuery(query).then(setMovies);
  }, [searchParams]);
  return (
    <div>
      <div className={css.form}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            type="text"
            name="movie"
            placeholder="Enter the movie..."
            onChange={handleChange}
            value={query}
          />
          <button className={css.buttonSearch} type="submit">
            Search
          </button>
        </form>
      </div>

      <MoviesList movies={movies} />
    </div>
  );
};
