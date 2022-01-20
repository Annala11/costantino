
// import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import './HomeReviewsCard.css'

function HomeReviewsCard({ review }) {

  return (
<div className="container">
  <div className="card">
    <div className="box">
      <div className="content">
        <h3>{review.title}</h3>
        <p>{review.text}</p>
        <a href="/reviews">Смотреть больше отзывов</a>
      </div>
    </div>
  </div>
</div>
  );
}
export default HomeReviewsCard;
