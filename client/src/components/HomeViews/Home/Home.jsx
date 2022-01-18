import React from 'react';
import HomeBilboard from '../HomeBilboard/HomeBilboard';
import HomeServicesAndPricesList from '../HomeServicesAndPrices/HomeServicesAndPricesList';
import Maps from '../Maps/Maps';
import Footer from '../Footer/Footer'
import HomeReviewsList from '../HomeReviews/HomeReviewsList';

function Home() {
  return (
    <>
      <HomeBilboard />
      <HomeServicesAndPricesList />
      <Maps />
      <HomeReviewsList />
      <Footer />
    </>
  );
}

export default Home;
