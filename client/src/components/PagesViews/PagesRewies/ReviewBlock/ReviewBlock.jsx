import React from 'react';
// import './reviewblock.css';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ReviewBlock({ review }) {

  return (
    <>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="div">
              title: {review.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {review.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </>
  );
}

export default ReviewBlock;
