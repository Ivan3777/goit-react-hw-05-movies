import {
  useParams,
  useLocation,
  Outlet,
  useNavigate,
  Link,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'Services/Api';
import { GoBackButton } from 'components/GoBack/GoBack';
import css from './MoviesDetails.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);

  if (!movie) {
    return;
  }
  return (
    <>
      <GoBackButton onClick={handleGoBack} />
      <div>
        <h1 className={css.titleMovie}>{movie.title}</h1>
        <div className={css.container}>
          <div>
            <img className={css.imageMovies} src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
          </div>
          <div className={css.overview}>
            <h2 className={css.title}>Overview</h2>
            <span>{movie.overview}</span>
          </div>
        </div>
      </div>
      <div className={css.details}>
        <Link className={css.link} to="cast" state={location.state}>
          Cast
        </Link>
        <Link className={css.link} to="reviews" state={location.state}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};
