import React from 'react';
// import { Link } from 'react-router-dom';

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import './HomeServicesAndPricesCard.css'

function HomeServicesAndPricesCard({ categoryParent }) {
  return (


    <div className='container' sx={{ maxWidth: 345 }}>
      <h3 style={{color:'#FFE4B5'}}>{categoryParent.name}</h3>

      {categoryParent.id === 1 &&
        <img className='homeServicesImg' src="https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
      }
      {categoryParent.id === 1 &&
        <p style={{color:'#778899', margin:'15px'}}>{categoryParent.discription ? categoryParent.discription : 'Лучшие специалисты нашего салона, помогут подчеркнуть твою индивидуальность и красоту!'}</p>
      }

      {categoryParent.id === 2 &&
        <img className='homeServicesImg' src="https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
      }
      {categoryParent.id === 2 &&
        <p style={{color:'#778899', margin:'15px'}} >{categoryParent.discription ? categoryParent.discription : 'Твоя брутальность и стиль - именно в этом мы разбираемся лучше всего! Ты не останешься без женского внимания.'}</p>
      }

      {categoryParent.id === 3 &&
        <img className='homeServicesImg' src="https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
      }
      {categoryParent.id === 3 &&
        <p style={{color:'#778899', margin:'15px'}} >{categoryParent.discription ? categoryParent.discription : 'Повседневные стрижки и подготовка Вашего ребенка к детским, но все же - серьезным мероприятием, мы с радостью и весельем поможем Вам!'}</p>
      }
    </div>





    // <Card sx={{ maxWidth: 345}}>
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //     {categoryParent.name}
    //     </Typography>
    //     {categoryParent.id === 1 && 
    //     <Typography variant="body2" color="text.secondary">
    //       {categoryParent.discription ? categoryParent.discription : 'Лучшие специалисты нашего салона, помогут подчеркнуть твою индивидуальность и красоту!'}
    //     </Typography>}
    //     {categoryParent.id === 2 && 
    //     <Typography variant="body2" color="text.secondary">
    //       {categoryParent.discription ? categoryParent.discription : 'Твоя брутальность и стиль - именно в этом мы разбираемся лучше всего! Ты не останешься без женского внимания.'}
    //     </Typography>}
    //     {categoryParent.id === 3 && 
    //     <Typography variant="body2" color="text.secondary">
    //       {categoryParent.discription ? categoryParent.discription : 'Повседневные стрижки и подготовка Вашего ребенка к детским, но все же - серьезным мероприятием, мы с радостью и весельем поможем Вам!'}
    //     </Typography>}
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">
    //     <Link to ='/neworder' > ЗАПИСАТЬСЯ </Link>
    //     </Button>
    //     <Button size="small">
    //     <Link to ={`/servicesandprices/${categoryParent.id}`} > ПОДРОБНЕЕ </Link>
    //     </Button>
    //   </CardActions>
    // </Card>
  );
}

export default HomeServicesAndPricesCard;
