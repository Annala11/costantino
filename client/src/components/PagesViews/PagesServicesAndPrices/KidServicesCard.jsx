import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';


function KidServicesCard({ kid, categoryParentId3 }) {

  const history = useHistory();

  function time(interval) {
    return interval * 30;
  }

  function handleRowClick(event){
    history.push(`neworder?serviceid=${event.target.parentElement.dataset.serviceid}`);
  }

  return (
    <>
      {kid.category_id === categoryParentId3.id &&
        <TableRow className="servicerow" data-serviceid={kid.id} onClick={handleRowClick}>
          <TableCell sx={{ textAlign: 'left' }} align="right">{kid.name}</TableCell>
          <TableCell align="right">{kid.price}</TableCell>
          <TableCell align="right">{time(kid.interval)}</TableCell>
        </TableRow>
      }
    </>
  );
}

export default KidServicesCard;
