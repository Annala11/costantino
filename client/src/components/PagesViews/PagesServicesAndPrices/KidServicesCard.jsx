import { TableCell, TableRow } from '@mui/material';
import React from 'react';


function KidServicesCard({ kid, categoryParentId3 }) {

  function time(interval) {
    return interval * 30;
  }

  return (
    <>
      {kid.category_id === categoryParentId3.id &&
        <TableRow className="servicerow" onClick={() => console.log(kid.id)}>
          <TableCell sx={{ textAlign: 'left' }} align="right">{kid.name}</TableCell>
          <TableCell align="right">{kid.price}</TableCell>
          <TableCell align="right">{time(kid.interval)}</TableCell>
        </TableRow>
      }
    </>
  );
}

export default KidServicesCard;
