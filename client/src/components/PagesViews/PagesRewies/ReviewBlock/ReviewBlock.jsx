import React from 'react';
import './reviewblock.css';

function ReviewBlock({ review }) {

  return (
    <>
      <div className="container">
        <div className="elem">title: {review.title}</div>
        <div className="elem">{review.text}</div>
      </div>

    </>
  );
}

export default ReviewBlock;
