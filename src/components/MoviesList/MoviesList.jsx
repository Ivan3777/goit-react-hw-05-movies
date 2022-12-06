import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovieList.module.css'

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.MovieList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`${baseUrl + movie.poster_path}`}
              alt={movie.title}
              width={300}
            />
            {/* {movie.title || movie.name} */}
          </Link>
        </li>
      ))}
    </ul>
  );
};
