import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userInitAC } from '../../redux/ActionCreators/usersAC';

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
    fetch('/getbranches', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          //dispatch(i1nitBranchesAC(data.branches));
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
