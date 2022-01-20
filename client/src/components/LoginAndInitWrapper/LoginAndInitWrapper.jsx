import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userInitAC } from '../../redux/ActionCreators/usersAC';
import { initBranchesAC } from '../../redux/ActionCreators/branchesAC';
import { initServicesAC } from '../../redux/ActionCreators/servicesAC';
import { initSpecialistsAC } from '../../redux/ActionCreators/specialistsAC';
import { initCategoriesAC } from '../../redux/ActionCreators/categoriesAC';

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
    fetch('/initdata', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          dispatch(initBranchesAC(data.branches));
          dispatch(initServicesAC(data.services));
          dispatch(initSpecialistsAC(data.specialists));
          dispatch(initCategoriesAC(data.categories));
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
