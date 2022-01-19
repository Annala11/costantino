import React from 'react';
import HomeBilboard from '../HomeBilboard/HomeBilboard';
import HomeServicesAndPricesList from '../HomeServicesAndPrices/HomeServicesAndPricesList';
import Maps from '../Maps/Maps';
import HomeReviewsList from '../HomeReviews/HomeReviewsList';
import HomeSpecialistsList from '../HomeSpecialists/HomeSpecialistsList';

function Home() {
  return (
    <>
      <HomeBilboard />
      <HomeServicesAndPricesList />
      <HomeSpecialistsList />
      <HomeReviewsList />
      <Maps />
    </>
  );
}

export default Home;
