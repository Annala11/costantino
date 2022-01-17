import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userInitAC } from '../../redux/ActionCreators/usersAC';
import { branchesInitAC } from '../../redux/ActionCreators/branchesAC';

function LoginAndInitWrapper({children}) {
  
  //const state = useSelector(state => state);
  const dispatch = useDispatch();

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
      })
  }, []);

  useEffect(() => {
    fetch('/branches/getall', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          dispatch(branchesInitAC(data));
        }
      })
  }, []);

  return (
    <>
      {children}
    </>
  );
}

export default LoginAndInitWrapper;
