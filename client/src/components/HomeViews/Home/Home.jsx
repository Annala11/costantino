import React from 'react';
import HomeBilboard from '../HomeBilboard/HomeBilboard';
import HomeServicesAndPrices from '../HomeServicesAndPrices/HomeServicesAndPrices';
import Maps from '../Maps/Maps';
import HomeReviews from '../HomeReviews/HomeReviews';
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
      <HomeBilboard />
      <HomeServicesAndPrices />
      <Maps />
      <HomeReviews />
      <Footer />
    </>
  );
}

export default Home;
