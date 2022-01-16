import React from 'react';

function ReviewBlock({ review }) {

  return (
    <>
      <div>
        <div>Name</div>
        <div>{review.title}</div>
      </div>

    </>
  );
}

export default ReviewBlock;
