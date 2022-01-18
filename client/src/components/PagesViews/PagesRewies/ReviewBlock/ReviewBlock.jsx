import React from 'react';
// import styles from './ReviewBlock.module.css';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';

function ReviewBlock({ review }) {

  return (
    <>

      <Card sx={{
        maxWidth: 345,
        minWidth: 200,
        backgroundColor: 'aliceblue',
        border: 'solid 2px darkgray',
        borderRadius: '10px',
        height: 200,
        width: 300,
        marginBottom: 5,
      }} >
        {/* // className={styles.card}> */}
        <CardActionArea>
          <CardContent sx={{
            textAlign: 'center'
          }}>
            <Typography variant="h5" component="div">
              {review.title}
            </Typography>
            <Typography sx={{
              height: 100,
            }}
              variant="body1" color="text.secondary">
              {review.text}
            </Typography>
            <Rating name="read-only" value={review.rating} readOnly />
          </CardContent>
        </CardActionArea>
      </Card>

    </>
  );
}


export default ReviewBlock;
