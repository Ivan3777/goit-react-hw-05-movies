import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Services/Api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(res => setReviews(res));
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <div>
      {<p>There is no reviews yet</p> || (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p> Author: {author}</p>
              <span>{content}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};