import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import "./MenServicesCard.css"

function MenServicesCard({ men, categoryParentId2 }) {

  const history = useHistory();

  function time(interval) {
    return interval*30;
  }

  function handleRowClick(event){
    history.push(`/neworder?serviceid=${event.target.parentElement.dataset.serviceid}`);
  }

  return (
    <>
    {men.category_id === categoryParentId2.id &&
      <TableRow className="servicerow" data-serviceid={men.id} onClick={handleRowClick}>
        <TableCell sx={{ textAlign: 'left' }} align="right">{men.name}</TableCell>
        <TableCell align="right">{men.price}</TableCell>
        <TableCell align="right">{time(men.interval)}</TableCell>
      </TableRow>
    }
  </>
  );
}

export default MenServicesCard;
