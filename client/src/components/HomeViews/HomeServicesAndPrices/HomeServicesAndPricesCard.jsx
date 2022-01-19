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
    <Card sx={{ maxWidth: 345,}}>
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
        {categoryParent.id === 1 && 
        <Typography variant="body2" color="text.secondary">
          {categoryParent.discription ? categoryParent.discription : 'Лучшие специалисты нашего салона, помогут подчеркнуть твою индивидуальность и красоту!'}
        </Typography>}
        {categoryParent.id === 2 && 
        <Typography variant="body2" color="text.secondary">
          {categoryParent.discription ? categoryParent.discription : 'Твоя брутальность и стиль - именно в этом мы разбираемся лучше всего! Ты не останешься без женского внимания.'}
        </Typography>}
        {categoryParent.id === 3 && 
        <Typography variant="body2" color="text.secondary">
          {categoryParent.discription ? categoryParent.discription : 'Повседневные стрижки и подготовка Вашего ребенка к детским, но все же - серьезным мероприятием, мы с радостью и весельем поможем Вам!'}
        </Typography>}
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link to ='/neworder' > ЗАПИСАТЬСЯ </Link>
        </Button>
        <Button size="small">
        <Link to ={`/servicesandprices/${categoryParent.id}`} > ПОДРОБНЕЕ </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default HomeServicesAndPricesCard;
