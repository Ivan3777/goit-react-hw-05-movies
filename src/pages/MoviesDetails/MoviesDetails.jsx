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
        <h1>{movie.title}</h1>
        <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
        <h2>Overview</h2>
        <span>{movie.overview}</span>
      </div>
      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>

      <Outlet />
    </>
  );
};
