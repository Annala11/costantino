import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function WomenServicesCard({ women, categoryParentId1 }) {
  
  const history = useHistory();

  function time(interval) {
    return interval * 30;
  }

  function handleRowClick(event){
    history.push(`neworder?serviceid=${event.target.parentElement.dataset.serviceid}`);
  }

  return (
    <>
      {women.category_id === categoryParentId1.id &&
          <TableRow className="servicerow" data-serviceid={women.id} onClick={handleRowClick}>
            <TableCell sx={{ textAlign: 'left' }} align="right">{women.name}</TableCell>
            <TableCell align="right">{women.price}</TableCell>
            <TableCell align="right">{time(women.interval)}</TableCell>
          </TableRow>
      }
    </>
  );
}

export default WomenServicesCard;
