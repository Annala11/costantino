import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import { initReviewsAC } from '../../../redux/ActionCreators/reviewsAC';


import HomeReviewsCard from './HomeReviewsCard';

// const dispatch = useDispatch();

function HomeReviewsList() {

  useEffect(() => {
    fetch('/reviews/bestreviews')
    .then(res => res.json())
    .then(console.log())
    // .then(data => dispatch(initReviewsAC(data.reviews)))
  }, [])

  const reviewsList = useSelector(state => state.reviews.reviews);

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', padding:'70px'}}>
      {reviewsList && reviewsList.map(review => <HomeReviewsCard key={ review.id}  review={ review } />)}
    </div>
  );
}
export default HomeReviewsList;
