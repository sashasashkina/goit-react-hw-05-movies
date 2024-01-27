// import css from './Reviews.module.css';
import { fetchReviews } from 'api/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const getReviews = async () => {
      try {
        const { results } = await fetchReviews(id);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [id]);
  return (
    <div>
      {reviews.length === 0 && <p>No reviews</p>}
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reviews;
