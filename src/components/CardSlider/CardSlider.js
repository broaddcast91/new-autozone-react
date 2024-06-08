import React from 'react';

import MyTabs from './MyTabs';

const CardSlider = () => {
  return (
    <div className='section py-5 bg-white text-gray-800 mt-10'>
      <div className='container mx-auto px-4 '>
        <h4 className='text-3xl font-bold mb-4 '>Trending Products</h4>
        <MyTabs />
      </div>
    </div>
  );
};

export default CardSlider;
