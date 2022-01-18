import React from 'react';
import { useSelector } from 'react-redux';
// import { initCategoriesAC } from '../../../redux/ActionCreators/categoriesAC';
import { Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';
// import { initServicesAC } from '../../../redux/ActionCreators/servicesAC';
import WomenServices from './WomenServices';
import MenServices from './MenServices';
import KidServices from './KidServices';
import './ServicesAndPricesList.css';
// import ServicesAndPricesItem from './ServicesAndPricesItem';


function ServicesAndPricesList() {

  //const dispatch = useDispatch();
  const services = useSelector(state => state.services.services);
  const categories = useSelector(state => state.categories.categories);

  const servicesWomen = services.filter(service => service.id <= 24);
  const servicesMen = services.filter(service => service.id > 24 && service.id <= 34);
  const servicesKid = services.filter(service => service.id > 24 && service.id >= 34);

  //родительские категории
  const categoriesParent = categories.filter(category => category.id <= 3);

  //дочерние категории
  const categoriesParentId1 = categories.filter(category => category.parent_id === 1);
  const categoriesParentId2 = categories.filter(category => category.parent_id === 2);
  const categoriesParentId3 = categories.filter(category => category.parent_id === 3);

  return (
    <Container className="servicesAndPrices" sx={{ width: "60%" }}>
      <Card sx={{ marginTop: "50px", width: "100%" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {categoriesParent[0]?.name}
            </Typography>
            {
              categoriesParentId1 && categoriesParentId1.map(categoryParentId1 =>
                <WomenServices key={categoryParentId1.id} servicesWomen={servicesWomen} categoryParentId1={categoryParentId1} />)
            }
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ marginTop: "10px", width: "100%" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {categoriesParent[1]?.name}
            </Typography>
            {
              categoriesParentId2 && categoriesParentId2.map(categoryParentId2 =>
                <MenServices key={categoryParentId2.id} servicesMen={servicesMen} categoryParentId2={categoryParentId2} />)
            }
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ marginTop: "10px", width: "100%" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {categoriesParent[2]?.name}
            </Typography>
            {
              categoriesParentId3 && categoriesParentId3.map(categoryParentId3 =>
                <KidServices key={categoryParentId3.id} servicesKid={servicesKid} categoryParentId3={categoryParentId3} />)
            }
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>

  );
}

export default ServicesAndPricesList;
