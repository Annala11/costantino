import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { initOrdersForAdminAC } from '../../../../redux/ActionCreators/ordersAC';
import OrderItemAdmin from '../OrderItemAdmin/OrderItemAdmin';
import './AdminPage.css';
import { userInitAC } from '../../../../redux/ActionCreators/usersAC';

import { useHistory } from 'react-router-dom';

import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

// import uuid4 from "uuid4";


function AdminPage() {
  const { user } = useSelector(state => state.users)

  console.log(user);
  const history = useHistory();
  // const id = uuid4();

  const { allOrdersForAdmin } = useSelector(state => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/ordersview/allorders', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log('Что то пошло не так!');
        } else {
          dispatch(initOrdersForAdminAC(data));
        }
      })
  }, [])

  const redir = () => {
    history.push('/');
  }

  useEffect(() => {
    fetch('/isauth', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          dispatch(userInitAC(data.user));
        }
        console.log(data.user);
        if (data.user?.role !== 'admin') {
          redir();
        }

      })
  }, []);



  return (
    <>
      {allOrdersForAdmin &&
        <div className="box">
          <TableRow className="head-row">
            <TableCell className="cell">

            </TableCell>
            <TableCell className="cell">
              Клиент
            </TableCell>
            <TableCell className="cell">
              Телефон
            </TableCell>
            <TableCell className="cell">
              Специалист
            </TableCell>
            <TableCell className="cell">
              Дата
            </TableCell>
            <TableCell className="cell">
              Статус
            </TableCell>
            <TableCell>

            </TableCell>
            <TableCell>

            </TableCell>
          </TableRow>
          {allOrdersForAdmin.length ? allOrdersForAdmin.map((order) => <OrderItemAdmin key={order.id} order={order} />) : <div>Нет заказов!</div>}

        </div>

      }
    </>
  );
}

export default AdminPage;
