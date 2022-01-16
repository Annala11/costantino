import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initCategoriesAC } from '../../../redux/ActionCreators/categoriesAC';
import { Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';
import ServicesAndPricesWomen from './ServicesAndPricesWomen';
import { initServicesAC } from '../../../redux/ActionCreators/servicesAC';
// import ServicesAndPricesItem from './ServicesAndPricesItem';


function ServicesAndPricesList() {

  const dispatch = useDispatch();
  const services = useSelector(state => state.services.services);
  const categories = useSelector(state => state.categories.categories);

  const servicesWomen = services.filter(service => service.id <= 24);
  console.log(servicesWomen, 'servicesWomenсдшуте');
  // console.log(services, 'services');

  //родительские категории
  const categoriesParent = categories.filter(category => category.id <= 3)
  //дочерние категории
  const categoriesParentId1 = categories.filter(category => category.parent_id === 1);
  const categoriesParentId2 = categories.filter(category => category.parent_id === 2);
  const categoriesParentId3 = categories.filter(category => category.parent_id === 3);

  console.log(categoriesParentId1, 'parent');

  useEffect(() => {
    fetch('/categories')
      .then(response => response.json())
      .then(data => dispatch(initCategoriesAC(data.categories)))
  }, [])

  useEffect(() => {
    fetch('/services')
    .then(response => response.json())
    .then(data => dispatch(initServicesAC(data.services)))
}, [])



  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {categoriesParent[0]?.name}
            </Typography>
           {
              categoriesParentId1 && categoriesParentId1.map(categoryParentId1 =>
                <ServicesAndPricesWomen key={categoryParentId1.id} servicesWomen={servicesWomen} categoryParentId1={categoryParentId1} />)
            } 
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {categoriesParent[1]?.name}
            </Typography>
            {
              categoriesParentId2 && categoriesParentId2.map(categoryParentId2 =>
                <ServicesAndPricesWomen key={categoryParentId2.id} categoryParentId2={categoryParentId2} />)
            }
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {categoriesParent[2]?.name}
            </Typography>
            {
              categoriesParentId3 && categoriesParentId3.map(categoryParentId3 =>
                <ServicesAndPricesWomen key={categoryParentId3.id} categoryParentId3={categoryParentId3} />)
            }
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>

  );
}

export default ServicesAndPricesList;
