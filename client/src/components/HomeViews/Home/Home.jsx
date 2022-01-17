import React from 'react';
import HomeBilboard from '../HomeBilboard/HomeBilboard';
import HomeServicesAndPricesList from '../HomeServicesAndPrices/HomeServicesAndPricesList';
import Maps from '../Maps/Maps';
import HomeReviews from '../HomeReviews/HomeReviews';
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
      <HomeBilboard />
      <HomeServicesAndPricesList />
      <Maps />
      <HomeReviews />
      <Footer />
    </>
  );
}

export default Home;
