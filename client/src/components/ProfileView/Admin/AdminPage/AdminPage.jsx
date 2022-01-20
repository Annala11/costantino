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
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function AdminPage() {

  const history = useHistory();

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
        if (data.user?.role !== 'admin') {
          redir();
        }

      })
  }, []);

  const HandleSortByDate = () => {
    allOrdersForAdmin.sort(function (a, b) {
      const dateA = a.status.toUpperCase();
      const dateB = b.status.toUpperCase();
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    })
    dispatch(initOrdersForAdminAC(allOrdersForAdmin));
  }

  const HandleSortByStatus = () => {
    allOrdersForAdmin.sort(function (a, b) {
      const statusA = a.status.toUpperCase();
      const statusB = b.status.toUpperCase();
      if (statusA < statusB) {
        return -1;
      }
      if (statusA > statusB) {
        return 1;
      }
      return 0;
    })
    dispatch(initOrdersForAdminAC(allOrdersForAdmin));
  }

  const HandleSortById = () => {
    allOrdersForAdmin.sort(function (a, b) {
      console.log('sort id');
      return a.id - b.id;
    })
    dispatch(initOrdersForAdminAC(allOrdersForAdmin));
  }

  return (
    <>
      {allOrdersForAdmin &&
        <div className="box">

          <TableRow
            className="head-row">
            <TableCell className="cell" onClick={HandleSortById}>
              Номер заказа
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
            <TableCell className="cell" onClick={HandleSortByDate}>
              Дата
            </TableCell>
            <TableCell className="cell" onClick={HandleSortByStatus}>
              Статус
            </TableCell>
            <TableCell>

            </TableCell>
            <TableCell className="filter-btn">
              <Tooltip title="">
                <IconButton onClick={HandleSortByDate}>

                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
          {allOrdersForAdmin.length ? allOrdersForAdmin.map((order) => <OrderItemAdmin key={order.id} order={order} />) : <div>Нет заказов!</div>}

        </div>

      }
    </>
  );
}

export default AdminPage;
