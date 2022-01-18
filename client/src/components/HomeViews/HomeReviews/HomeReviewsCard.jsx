
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';

function HomeReviewsCard({review}) {
  return (


    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography variant="h5" component="div">
          Заголовок: {review.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Содержание:{review.text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  );
}

export default HomeReviewsCard;
