import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import Hire from '../components/Hire';
import Trending from '../components/Trending';
import Testimonial from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <Trending />
      <Hire />
      <Testimonial />
    </>
  );
};

export default Home;