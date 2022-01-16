import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from '@material-ui/core';

function ServicesAndPricesItem({ categoryParent }) {

  // console.log(category, 'category');
  return (
    <Container maxWidth="sm">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { categoryParent.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {
             
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  </Container>
  );
}

export default ServicesAndPricesItem;
