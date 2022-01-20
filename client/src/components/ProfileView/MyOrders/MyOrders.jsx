import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initOrdersAC } from '../../../redux/ActionCreators/ordersAC';
// import { initSpecialistsAC } from '../../../redux/ActionCreators/specialistsAC';
import MyOrdersCars from './MyOrdersCars';

function MyOrders() {

  // const specialists = useSelector(state => state.specialists.specialists);
  const orders = useSelector(state => state.orders.orders);
  console.log(orders, 'orders');
  const userId = useSelector(state => state.users.user.id);
  // заказ авторизированного пользователя
  const orderUserId = orders.filter(order => order.user_id === userId);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/ordersview', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId,
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log('Что то пошло не так!');
        } else {
          dispatch(initOrdersAC(data.orders));
        }
      })
  }, [])

  return (
    <div style={{ marginTop: "50px"}}>
      {orderUserId && orderUserId.map(order => <MyOrdersCars key={order.id} order={order} />)}
    </div>
  );
}

export default MyOrders;
