import React from 'react';
import  './ReviewBlock.css';


// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';

function ReviewBlock({ review }) {

  return (
    <>

<div className="reviewListContainer">
      <div className="card">
        <div className="box">
          <div className="content">
            <h3>{review.title}</h3>
            <p>{review.text}</p>
            <Rating name="read-only" value={review.rating} readOnly />
          </div>
        </div>
      </div>
    </div>



    </>
  );
}


export default ReviewBlock;
