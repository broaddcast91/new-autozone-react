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
      <div id='about' class='relative bg-white overflow-hidden'>
        <div class='max-w-7xl mx-auto'>
          <div class='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <svg
              class='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100'></polygon>
            </svg>

            <div class='pt-1'></div>

            <main class='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div class='sm:text-center lg:text-left'>
                <h2 class='my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl'>
                  About Us
                </h2>

                <p>
                  Saboo Autozone Pvt. Ltd. headquartered in Hyderabad,
                  Telangana, is an automotive services company that operates
                  Ashok Leyland light commercial vehicle dealerships. First
                  established It’s dealerships in Hyderabad during 2013 they
                  have gone on to sell 15,000+ Vehicles, establishing itself as
                  a mainstay of the LCV sector of Hyderabad. With an excellent
                  track record for the impeccable quality of our service and
                  customer satisfaction, we look forward to growing in a dynamic
                  business environment and keep up with the need to anticipate
                  and embrace change, and continuously reinvent ourselves. The
                  Saboo Autozone family has grown to 250+ employees that operate
                  13 Dealerships and 6 Service outlets in and around Hyderabad.
                  <br></br> <br></br>
                  Saboo Autozone leadership comprises of seasoned automobile
                  entrepreneurs with more than 4 decades of experience dealing
                  in the domain of automobiles in Hyderabad. Directors of Saboo
                  Autozone Pvt. Ltd. are Deepal Saboo Adeppa and Meetal Boob.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div class='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            class='h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full'
            src='https://sabooautozone.com/static/media/vehicles-banner.6710529b59fa03594328.webp'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default About;
