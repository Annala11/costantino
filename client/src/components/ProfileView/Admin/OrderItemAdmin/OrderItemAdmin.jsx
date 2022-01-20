import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './OrderItemAdmin.css';
import { updateOrder } from '../../../../redux/ActionCreators/ordersAC';
import * as dayjs from 'dayjs';

import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

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

  const dateShortHelper = (date) => {
    if (date === 'undefiend' || date === null) {
      return '';
    }
    return `${dayjs(date).locale("ru").format("YYYY.MM.DD")} в: ${dayjs(date).locale("ru").format("HH:mm")}`;
  }

  return (
    <>

      {status &&
        <TableRow style={{
          width: '100%',

        }}
          className="row">
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
            {dateShortHelper(order.date)}
          </TableCell>
          <TableCell>
            {order.status}
          </TableCell>
          <TableCell>

            <Button style={{
              backgroundColor: 'green'
            }}
              color="success" variant="contained"
              onClick={onFinishOrder} >Выполнить</Button>
          </TableCell>
          <TableCell>
            <ColorButton style={{
              color: '#dee8ec',
              backgroundColor: '#C40303',
            }}
              variant="contained" onClick={onCloseOrder} >Отменить</ColorButton>
          </TableCell>
        </TableRow>
      }
    </>

  );
}

export default OrderItemAdmin;
