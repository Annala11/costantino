import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initOrdersAC } from '../../../redux/ActionCreators/ordersAC';
import { initSpecialistsAC } from '../../../redux/ActionCreators/specialistsAC';
import MyOrdersCars from './MyOrdersCars';

function MyOrders() {

  // const specialists = useSelector(state => state.specialists.specialists);
  const orders = useSelector(state => state.orders.orders);
  const userId = useSelector(state => state.users.user.id);
  // заказ авторизированного пользователя
  const orderUserId = orders.filter(order => order.user_id === userId);
  // console.log(orderUserId, 'orderUserId');
  // console.log(userId, 'userId');
  const dispatch = useDispatch();

 

  useEffect(() => {
    fetch('/ordersview')
      .then(response => response.json())
      .then(data => {
        dispatch(initOrdersAC(data.orders));
        dispatch(initSpecialistsAC(data.specialists));
      })
  }, [])
 

  return (
    <div>
      { orderUserId && orderUserId.map(order => <MyOrdersCars key={order.id} order={order}/>)}
    </div>
  );
}

export default MyOrders;
