import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import "./MenServicesCard.css"

function MenServicesCard({ men, categoryParentId2 }) {

  function time(interval) {
    return interval*30;
  }

  return (
    <>
    {men.category_id === categoryParentId2.id &&
      <TableRow className="servicerow" onClick={()=>console.log(men.id)}>
        <TableCell sx={{ textAlign: 'left' }} align="right">{men.name}</TableCell>
        <TableCell align="right">{men.price}</TableCell>
        <TableCell align="right">{time(men.interval)}</TableCell>
      </TableRow>
    }
  </>
  );
}

export default MenServicesCard;
