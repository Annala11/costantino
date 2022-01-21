import React from 'react';
import { useSelector } from 'react-redux';
import MyOrders from '../MyOrders/MyOrders';
import './MyProfile.css'

function MyProfile() {


  const user = useSelector(state => state.users.user);
  //TODO
  return (
    <div className="whiteBackGround myProfileContainer">
    <div>
      <h1 className='ProfileName'>Имя: {user.name}</h1>
      <h1>Телефон: {user.phone}</h1>
    </div>
    <MyOrders/>
    </div>
  );
}

export default MyProfile;
