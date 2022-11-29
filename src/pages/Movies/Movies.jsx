import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'Services/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';

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
    const params = searchParams.get('query');
    if (!query) {
      return;
    }
    getMoviesByQuery(params).then(res => setMovies(res));
  }, [query, searchParams]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          type="text"
          name="movie"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};