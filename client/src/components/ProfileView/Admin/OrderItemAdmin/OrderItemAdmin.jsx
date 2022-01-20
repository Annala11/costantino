import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './OrderItemAdmin.css';
import { updateOrder } from '../../../../redux/ActionCreators/ordersAC';

function OrderItemAdmin({ order }) {

  const [status, setStatus] = useState(order.status);

  const dispatch = useDispatch();
  const onCloseOrder = () => {
    setStatus('closed');
    changeStatus('closed');
  }

  const onFinishOrder = () => {
    setStatus('finished');
    changeStatus('finished');
  }

  const changeStatus = (status) => {
    fetch('/ordersview/changestatus', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: order.id,
        status: status,
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log('Что то пошло не так!');
        } else {
          dispatch(updateOrder(data));
        }
      })

    setStatus(status);
  }

  return (
    <>
      {status &&
        <TableRow className="row">
          <TableCell>
            {order.id}
          </TableCell>
          <TableCell>
            {order.User.name}
          </TableCell>
          <TableCell>
            {order.User.phone}
          </TableCell>
          <TableCell>
            {order.Specialist.name}
          </TableCell>
          <TableCell>
            {order.date}
          </TableCell>
          <TableCell>
            {order.status}
          </TableCell>
          <TableCell>

            <Button color="success" variant="contained"
              onClick={onFinishOrder}>Выполнить</Button>
          </TableCell>
          <TableCell>
            <Button variant="contained" color="error"
              onClick={onCloseOrder}>Отменить</Button>
          </TableCell>
        </TableRow>
      }
    </>

  );
}

export default OrderItemAdmin;
