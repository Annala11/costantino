import React from 'react';
import { useSelector } from 'react-redux';

import HomeServicesAndPricesCard from './HomeServicesAndPricesCard';
import './HomeServicesAndPricesList.css';

function HomeServicesAndPricesList() {
  const categories = useSelector(state => state.categories.categories);
  const categoriesParent = categories?.filter(category => !category.parent_id)

  return (
    <div className='homePageServicesContainer'>
      {categoriesParent && categoriesParent.map(categoryParent => <HomeServicesAndPricesCard key={categoryParent.id} categoryParent={categoryParent} />)}
    </div>
  );
}

export default HomeServicesAndPricesList;
