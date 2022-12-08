import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Services/Api';
import css from './Cast.module.css'

const baseUrl = 'https://image.tmdb.org/t/p/w200/';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }
  return (
    <div>
      <ul className={css.actors}>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              key={actor.id}
              src={baseUrl + actor.profile_path}
              alt={actor.profile_path}
            />
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
