import React from 'react';
import { useSelector } from 'react-redux';
import ReviewBlock from '../ReviewBlock/ReviewBlock.jsx';

function ReviewsList() {

  const { reviews } = useSelector(state => state.reviews);
  return (
    <>
      {reviews.length ? reviews.map((review) => <ReviewBlock key={review.id} review={review} />) : <div>Нет Отзывов!</div>}
    </>
  );
}

export default ReviewsList;
