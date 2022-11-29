import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'Services/Api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(res => setCast(res));
  }, [movieId]);
  if (!cast) {
    return;
  }
  return (
    <div>
      <ul>
        {cast.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};