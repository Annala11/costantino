import * as React from 'react';
import ServicesAndPricesItem from './ServicesAndPricesItem';


function ServicesAndPricesList() {

React.useEffect(() => {
  fetch('http://localhost:5001/categories')
  .then(response => response.json())
  .then(data => console.log(data.categories))
},[])

  return (
   <div>
   <ServicesAndPricesItem/>
   </div>

  );
}

export default ServicesAndPricesList;
