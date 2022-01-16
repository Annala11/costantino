// import { Typography } from '@mui/material';
import React from 'react';

function WomenServicesCard({ women, categoryParentId1 }) {

  return (
    <>
      {women.category_id === categoryParentId1.id && women.name}
    </>
  );
}

export default WomenServicesCard;
