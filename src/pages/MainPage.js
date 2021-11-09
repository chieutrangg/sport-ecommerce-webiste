import React from 'react';
// Importing components
import Header from '../components/header/Header'
import Features from '../components/featuredCategories/Features';
import FeatureProduct from '../components/featuredCategories/FeatureProduct';
import Review from '../components/reviews/Review'
import Footer from '../components/footer/Footer';

function MainPage() {
  return (
  <div>
    <Features />
    <FeatureProduct />
    <Review />
    <Footer />
  </div>
  );
}

export default MainPage;
