import { Typography } from '@mui/material';
import React from 'react';


function ServicesAndPricesItem({women, categoryParentId1}) {

  console.log(women.category_id, 'women.category_id');
  console.log(categoryParentId1, 'categoryParentId1');
  return (
    <>
      <Typography>
        {women.category_id === categoryParentId1.id && women.name}
      </Typography>
    </>
  );
}

export default ServicesAndPricesItem;
