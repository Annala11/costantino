import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initCategoriesAC } from '../../../redux/ActionCreators/categoriesAC';

import HomeServicesAndPricesCard from './HomeServicesAndPricesCard';
import './HomeServicesAndPricesList.css';

function HomeServicesAndPricesList() {

    const dispatch = useDispatch();
    
    useEffect(() => {
      fetch('/categories')
      .then(response => response.json())
      .then(data => dispatch(initCategoriesAC(data.categories)))
    }, [])
    
        const categories = useSelector(state => state.categories.categories);
        const categoriesParent = categories?.filter(category => category.id <= 3)

  return (
    <div className='homePageServicesContainer'>
      {categoriesParent && categoriesParent.map(categoryParent => <HomeServicesAndPricesCard key={ categoryParent.id}  categoryParent={ categoryParent } />)}
    </div>
  );
}

export default HomeServicesAndPricesList;
