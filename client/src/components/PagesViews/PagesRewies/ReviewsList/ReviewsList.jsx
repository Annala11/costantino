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
  // console.log(reviews.length);
  // console.log(reviews.reviews.length);
  useEffect(() => {
    fetch('/reviews')
      .then(res => res.json())
      .then(reviews => dispatch(initReviewsAC(reviews)))
  }, [dispatch])

  // console.log(reviews.length);
  return (
    <>
      {/* <ReviewBlock /> */}
      {reviews.length > 0 ? reviews.map((review) => <ReviewBlock key={review.id} review={review} />) : <div>Нет Отзывов!</div>}
    </>
  );
}

export default ReviewsList;
