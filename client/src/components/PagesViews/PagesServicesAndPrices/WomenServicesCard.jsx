import { TableCell, TableRow } from '@mui/material';
import React from 'react';


function WomenServicesCard({ women, categoryParentId1 }) {

  function time(interval) {
    return interval*30;
  }

  return (
    <>
      {women.category_id === categoryParentId1.id &&
        <TableRow className="servicerow" onClick={()=>console.log(women.id)}>
          <TableCell sx={{ textAlign: 'left' }} align="right">{women.name}</TableCell>
          <TableCell align="right">{women.price}</TableCell>
          <TableCell align="right">{time(women.interval)}</TableCell>
        </TableRow>
      }
    </>
  );
}

export default WomenServicesCard;
