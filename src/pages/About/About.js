import React from 'react';
import MainHeader from '../Header';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <>
      <MainHeader />
      <MainAboutLayout />
      <Footer />
    </>
  );
};

const MainAboutLayout = () => {
  return (
    <>
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8'>
          <div className='flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between'>
            {/* Left Column: Text Content */}
            <div className='lg:w-1/2'>
              <h2 className='text-3xl font-bold text-gray-900 leading-tight mb-4 sm:text-4xl lg:text-5xl'>
                About Us
              </h2>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Saboo Autozone Pvt. Ltd., headquartered in Hyderabad, Telangana,
                is an automotive services company that operates Ashok Leyland
                light commercial vehicle dealerships. Established in Hyderabad
                in 2013, we have sold over 15,000 vehicles, establishing
                ourselves as a mainstay in the LCV sector of Hyderabad. With an
                excellent track record for service quality and customer
                satisfaction, we are committed to growing in a dynamic business
                environment, embracing change, and continually reinventing
                ourselves. The Saboo Autozone family has grown to over 250
                employees, operating 13 dealerships and 6 service outlets in and
                around Hyderabad.
              </p>
              <p className='text-gray-700 leading-relaxed mb-8'>
                Saboo Autozone is led by seasoned automobile entrepreneurs with
                more than four decades of experience in Hyderabad. The directors
                of Saboo Autozone Pvt. Ltd. are Deepal Saboo Adeppa and Meetal
                Boob.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className='lg:w-1/2 mt-8 lg:mt-0'>
              <div className='relative'>
                <img
                  className='w-full h-auto rounded-lg shadow-lg'
                  src='https://sabooautozone.com/static/media/vehicles-banner.6710529b59fa03594328.webp'
                  alt='About Us Banner'
                />
                <div className='absolute inset-0 bg-gray-900 opacity-50 rounded-lg'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
