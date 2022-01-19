import React from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogoutAC } from '../../../redux/ActionCreators/usersAC';


const Logout = () => {


  const dispatch = useDispatch()
  let history = useHistory();

  fetch('/logout', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(data => {
      if (data.logoutComplete) {

        dispatch(userLogoutAC());
        history.push("/");
      } else {
        console.log("logout issues..");
      }
    });

    return (
      <>

      </>
      )
    
  
}

export default Logout
