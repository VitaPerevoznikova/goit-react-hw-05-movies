import { GetReviewsMovie } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsDescr, ReviewsItem, ReviewsList } from './Reviews.style';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchReviews = async () => {
      try {
        const Reviews = await GetReviewsMovie(movieId);
        setReviews(Reviews);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);
  if (loading) {
    return <Loader />;
  }

  return reviews.length === 0 ? (
    <ReviewsDescr>No Reviews.</ReviewsDescr>
  ) : (
    <ReviewsList>
      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <ReviewsDescr>{content}</ReviewsDescr>
        </ReviewsItem>
      ))}
    </ReviewsList>
  );
};

export default Reviews;
