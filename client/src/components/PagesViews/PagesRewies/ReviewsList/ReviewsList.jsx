import React, { useEffect } from 'react';
// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReviewBlock from '../ReviewBlock/ReviewBlock.jsx';

import { initReviewsAC } from '../../../../redux/ActionCreators/reviewsAC';

function ReviewsList() {

  const { reviews } = useSelector(state => state.reviews);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initReviewsAC())
  // }, [dispatch])
  // if (reviews.length > 0) {
  //   console.log(reviews[0].id);
  // }

  // console.log(reviews.reviews.length);
  useEffect(() => {
    fetch('/reviews')
      .then(res => res.json())
      .then(reviews => dispatch(initReviewsAC(reviews)))
  }, [dispatch])

  // TODO - get users from users table for reviews, and branch
  return (
    <>
      {reviews.length ? reviews.map((review) => <ReviewBlock key={review.id} review={review} />) : <div>Нет Отзывов!</div>}
    </>
  );
}

export default ReviewsList;
