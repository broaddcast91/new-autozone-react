import React from 'react';
import Header from './Header';
import Slider from '../components/Slider/Slider';
import HomepageForm from '../components/HomepageForm';
import CardSlider from '../components/CardSlider/CardSlider';
import OurOfferings from '../components/OurOfferings/OurOfferings';
import OurCoreValues from '../components/OurCoreValues/OurCoreValues';
import UltimateJourney from '../components/UltimateJourney/UltimateJourney';
import Footer from '../components/Footer/Footer';
import TopHeader from './TopHeader';

const Home = () => {
  return (
    <div className='bg-white'>
      <TopHeader />
      <Header />
      <Slider />
      <HomepageForm />
      <CardSlider />
      <OurOfferings />
      <OurCoreValues />
      <UltimateJourney />
      <Footer />
    </div>
  );
};

export default Home;
