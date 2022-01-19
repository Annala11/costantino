import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { initOrdersForAdminAC } from '../../../redux/ActionCreators/ordersAC';

function AdminPage() {

  const { allOrdersForAdmin } = useSelector(state => state.orders);
  const dispatch = useDispatch();

  console.log(allOrdersForAdmin);

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

  return (
    <div>

    </div>
  );
}

export default AdminPage;
