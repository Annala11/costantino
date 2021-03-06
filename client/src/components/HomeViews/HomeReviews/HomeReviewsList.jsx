import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { initTopReviewsAC } from '../../../redux/ActionCreators/reviewsAC';

import HomeReviewsCard from './HomeReviewsCard';

function HomeReviewsList() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/reviews/bestreviews')
      .then(res => res.json())
      .then(data => dispatch(initTopReviewsAC(data)))
  }, [dispatch])


  const topReviewsList = useSelector(state => state.reviews.topReviews);

  return (
    <>
    <div className='line'></div>
      <h2 style={{ color: '#FFE4B5', text: 'bold' }}>
        ПОСЛЕДНИЕ ОТЗЫВЫ НАШИХ КЛИЕНТОВ
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '70px' }}>
        {topReviewsList && topReviewsList.map(review => <HomeReviewsCard key={review.id} review={review} />)}
      </div>
    </>
  );
}
export default HomeReviewsList;
