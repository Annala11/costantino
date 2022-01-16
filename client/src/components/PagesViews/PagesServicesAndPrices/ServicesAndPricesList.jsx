import React, { useEffect } from 'react';
import ServicesAndPricesItem from './ServicesAndPricesItem';
import { useDispatch, useSelector } from 'react-redux';
import { initCategoriesAC } from '../../../redux/ActionCreators/categoriesAC';


function ServicesAndPricesList() {

  const dispatch = useDispatch();

  const categories = useSelector(state => state.categories.categories);
  //родительские категории
  const categoriesParent = categories.filter(category => category.id <= 3)
  console.log(categoriesParent, 'parent');
  
  useEffect(() => {
    fetch('http://localhost:5001/categories')
    .then(response => response.json())
    .then(data => dispatch(initCategoriesAC(data.categories)))
  }, [])
  
  


  return (
    <div>
      {categoriesParent && categoriesParent.map(categoryParent => <ServicesAndPricesItem key={ categoryParent.id}  categoryParent={ categoryParent } />)}
    </div>

  );
}

export default ServicesAndPricesList;
