import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function HomeServicesAndPricesCard({categoryParent}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        alt="photo"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {categoryParent.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {categoryParent.discription ? categoryParent.discription : 'тут будет описание, когда засеим в базе discription:)  '}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link to ='/neworder' > ЗАПИСАТЬСЯ </Link>
        <Button size="small"></Button>
        <Link to ='/servicesandprices' > ПОДРОБНЕЕ </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default HomeServicesAndPricesCard;
