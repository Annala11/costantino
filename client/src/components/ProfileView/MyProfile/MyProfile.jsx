import React from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router';

function MyProfile() {

  // const history = useHistory();

  const user = useSelector(state => state.admin);
  //TODO
  return (
    <div>
      <div>Имя: {user.name}</div>
      <div>Телефон: {user.phone}</div>
    </div>
  );
}

export default MyProfile;
