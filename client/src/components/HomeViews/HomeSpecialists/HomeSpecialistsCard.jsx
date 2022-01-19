import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';



function HomeSpecialistsCard({ specialist }) {
  return (
    <Card sx={{ maxWidth: 345, }}>
      <CardMedia
        component="img"
        height="140"
        image= {specialist.photo}
        alt="photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {specialist.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {specialist.description}
        </Typography>
      </CardContent>

    </Card>
  );
}

export default HomeSpecialistsCard;
