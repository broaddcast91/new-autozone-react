import React, { useState } from 'react';
import MainHeader from '../Header';
import Footer from '../../components/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Tab } from '@headlessui/react';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { FaTruckLoading } from 'react-icons/fa';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { MdSpeed } from 'react-icons/md';
import { ImPower } from 'react-icons/im';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery from 'react-image-gallery';
import './vehicles.css';
import { FaHandPointRight } from 'react-icons/fa';
import { PiPaperPlaneRightFill } from 'react-icons/pi';
import HomepageForm from '../../components/HomepageForm';

const exterior = [
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/badaDost1440620.png',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/badaDost1440620.png',
  },

  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/01_Bada-Dost-i4-Ultra-Blue.jpg',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/01_Bada-Dost-i4-Ultra-Blue.jpg',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/02_Bada-Dost-i4-Ultra-Blue.jpg',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/02_Bada-Dost-i4-Ultra-Blue.jpg',
  },
];

const interior = [
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Bada-Dost-3-Seater-People.jpg',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Bada-Dost-3-Seater-People.jpg',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Driver-Sleeping.jpg',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Driver-Sleeping.jpg',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Interior-2.jpg',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Interior-2.jpg',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Bada-Dost_1605-final.jpg',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Bada-Dost_1605-final.jpg',
  },
  {
    original:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Bada-Dost_2140-final.jpg',
    thumbnail:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Badadost-3-gallery/all/Bada-Dost_2140-final.jpg',
  },
];

const cardData = [
  { title: 'Card 1', description: 'This is the description for card 1.' },
  { title: 'Card 2', description: 'This is the description for card 2.' },
  { title: 'Card 3', description: 'This is the description for card 3.' },
  { title: 'Card 4', description: 'This is the description for card 4.' },
  { title: 'Card 5', description: 'This is the description for card 5.' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const BadaDostCNG = () => {
  return (
    <div className='bg-white'>
      <MainHeader />
      <BadaDosti2Hero />
      <HomepageForm />
      <ExploreCards />
      <VehicleInfo />
      <TabLayout />
      <GalleryComponent />
      <HomepageForm />
      <Footer />
    </div>
  );
};

const BadaDosti2Hero = () => {
  return (
    <>
      <div
        className='relative bg-cover bg-center w-full'
        style={{ height: '75vh' }}
      >
        <img
          className='absolute inset-0 w-full h-full object-cover'
          src={require('../../assets/banners/Bada-Dost-CNG_Banner-Desktop-1440x620px.jpg')}
          alt='dost-banner'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative  flex items-center justify-center h-full'>
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center'>
            Bada Dost CNG
          </h1>
        </div>
      </div>
    </>
  );
};

const ExploreCards = () => {
  return (
    <>
      <div className='bg-white mt-10'>
        <div className='container mx-auto py-10'>
          <div className='text-3xl font-bold'>
            Explore and experience Bada Dost <br /> in a whole new way.{' '}
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='p-4 rounded-xl custom-gradient shadow-md text-white h-96'>
              <div className='flex items-center'>
                <PiPaperPlaneRightFill className='w-5 h-5 mr-2' />
                <span className='text-lg font-bold'>BODY</span>
              </div>

              <div className='mt-6 pr-10 pt-10 pb-10'>
                <span className='text-3xl font-normal text-left'>
                  Superior load
                  <br />
                  body length -<br />
                  2745mm (9ft)
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-4 rounded-xl custom-bg shadow-md text-white h-96 '>
              <div className='flex items-center '>
                <PiPaperPlaneRightFill className='w-5 h-5 mr-2 ' />
                <span className='text-lg font-bold'>ENGINE</span>
              </div>

              <div className='justify-start '>
                <span className='text-2xl font-normal text-left block pt-10'>
                  Best-in-class 70
                  <br />
                  hp power and 190 -<br />
                  Nm torque
                </span>
              </div>

              <div className='flex justify-center items-center h-52'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/Bada-Dost-Engine-P-15.png'
                  alt=''
                  className='max-h-full max-w-full p-5'
                />
              </div>
            </div>
          </SwiperSlide>
          {/* second set */}
          <SwiperSlide>
            <div className='p-4 rounded-xl custom-gradient shadow-md text-white h-96'>
              <div className='flex items-center'>
                <PiPaperPlaneRightFill className='w-5 h-5 mr-2' />
                <span className='text-lg font-bold'>PAYLOAD</span>
              </div>

              <div className='mt-6 pr-2 pt-10 pb-10'>
                <span className='text-3xl font-normal text-left block'>
                  Superior payload
                  <br />
                  (1425 kg)
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-4 rounded-xl custom-bg shadow-md text-white h-96 '>
              <div className='flex items-center '>
                <PiPaperPlaneRightFill className='w-5 h-5 mr-2 ' />
                <span className='text-lg font-bold'>COMFORT</span>
              </div>

              <div className='justify-start '>
                <span className='text-2xl font-normal text-left block pt-10'>
                  First in Class
                  <br />
                  seats (1+2)
                </span>
              </div>

              <div className='flex justify-center items-center h-52'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/images/interior.png'
                  alt=''
                  className='max-h-full max-w-full p-6 rounded-3xl'
                />
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </>
  );
};

const VehicleInfo = () => {
  return (
    <>
      <div className='container mx-auto py-10 mt-10'>
        <div className='flex justify-between items-center p-4'>
          <div className='text-left'>
            <p className='text-4xl font-bold'>BADA DOST CNG</p>
          </div>

          <div className='flex justify-end items-center space-x-4 text-right'>
            <div>
              <p className='text-lg font-semibold underline'>
                Download Brochure
              </p>
            </div>
            <div>
              <a
                href='#_'
                class='relative inline-flex items-center px-12 py-2 overflow-hidden text-base font-medium text-[#9E2A31] border-2 border-[#9E2A3] rounded-full hover:text-white group hover:bg-gray-50'
              >
                <span class='absolute left-0 block w-full h-0 transition-all bg-[#9E2A31] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
                <span class='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
                  <svg
                    class='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    ></path>
                  </svg>
                </span>
                <span class='relative'>Book Now&nbsp;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState('tabs-home');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className='container mx-auto'>
      <Tab.Group>
        <Tab.List className='flex flex-row space-x-1 border-b-2 border-gray-300'>
          {['BADA DOST CNG', 'SPECIFICATIONS'].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  'py-2.5 px-4 text-xl font-medium leading-5 text-gray-700',
                  'focus:outline-none',
                  selected
                    ? 'border-b-4 border-[#9E2A31] font-bold'
                    : 'hover:text-[#9E2A31]'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9E2A31] focus:ring-white'
            )}
          >
            <Tab1Content />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9E2A31] focus:ring-white'
            )}
          >
            <Tab2Specifications />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9E2A31] focus:ring-white'
            )}
          >
            <p>tab 3</p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

const Tab1Content = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          <div className='max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white h-64 border border-[#9e2a3233] relative'>
            <div className='p-6 h-full flex flex-col '>
              <div className='font-bold text-base mb-2 text-[#9E2A31]'>
                POWER
              </div>
              <p className='text-gray-700 text-5xl font-semibold flex-grow'>
                70<span className='text-3xl font-normal'>hp</span>
              </p>
              <div className='absolute bottom-4 right-4 text-5xl text-[#9e2a328d]'>
                <ImPower />
              </div>
            </div>
          </div>
          <div className='max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white h-64 border border-[#9e2a3233] relative'>
            <div className='p-6 h-full flex flex-col'>
              <div className='font-bold text-base mb-2 text-[#9E2A31]'>
                TOP SPEED
              </div>
              <p className='text-gray-700 text-5xl font-semibold flex-grow'>
                80<span className='text-3xl font-normal'>km/h</span>
              </p>
              <div className='absolute bottom-4 right-4 text-6xl text-[#9e2a328d]'>
                <MdSpeed />
              </div>
            </div>
          </div>
          <div className='max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white h-64 border border-[#9e2a3233] relative'>
            <div className='p-6 h-full flex flex-col'>
              <div className='font-bold text-base mb-2 text-[#9E2A31]'>
                SEATS
              </div>
              <p className='text-gray-700 text-5xl font-semibold flex-grow'>
                1<span className='font-normal text-3xl'>+</span>2
              </p>
              <div className='absolute bottom-4 right-4 text-6xl text-[#9e2a328d]'>
                <MdAirlineSeatReclineExtra />
              </div>
            </div>
          </div>
          <div className='max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white h-64 border border-[#9e2a3233] relative'>
            <div className='p-6 h-full flex flex-col'>
              <div className='font-bold text-base mb-2 text-[#9E2A31]'>
                PAYLOAD CAPACITY
              </div>
              <p className='text-gray-700 text-5xl font-semibold flex-grow'>
                1425<span className='text-3xl font-normal'>kg</span>
              </p>
              <div className='absolute bottom-4 right-4 text-6xl text-[#9e2a328d]'>
                <FaTruckLoading />
              </div>
            </div>
          </div>
          <div className='max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white h-64 border border-[#9E2A31] relative'>
            <div className='p-6 h-full flex flex-col'>
              <p className='tracking-wide text-5xl font-semibold flex-grow text-[#9E2A31]'>
                Show All Specs
              </p>
              <div className='absolute bottom-4 right-4 text-4xl text-[#9E2A31]'>
                <FaArrowRightToBracket />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Tab2Specifications = () => {
  return (
    <>
      <div className='flex justify-start mr-4'>
        <div className='w-full max-w-xs'>
          <div className='dropdown dropdown-bottom'>
            <div
              tabIndex={0}
              role='button'
              className='btn m-1 text-3xl flex items-center text-[#9E2A31]'
            >
              Bada Dost CNG
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 ml-1'
                viewBox='0 0 20 20'
                fill='none'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-max'
              style={{ width: 'max-content' }}
            >
              <li className='text-3xl rounded-md hover:bg-red-200 text-[#9E2A31]'>
                <a>
                  Bada Dost CNG | <span className='text-xs ml-4'>Price</span> ₹
                  9.00 L
                </a>
              </li>
              <li>
                <a className='text-3xl hover:bg-red-200 text-[#9E2A31]'>
                  Bada Dost CNG | <span className='text-xs ml-4'>Price</span> ₹
                  9.00 L
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className='flex items-center m-3'>
          <div className='text-gray-500'>ENGINE</div>
          <div className='border-b border-gray-300 flex-grow ml-4'></div>
        </div>
        <div className='w-full text-black font-normal text-base'>
          <div className='flex justify-start ml-4 mt-6'>
            <p className='w-3/12  p-2'>Max Power</p>
            <p className='w-9/12  p-2'>51.45 kW (70 hp) @ 3,300 RPM</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Max Torque</p>
            <p className='w-9/12  p-2'>190 Nm @ 1600-2400 rpm</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Type</p>
            <p className='w-9/12  p-2'>Turbo Charged Intercooled</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Engine</p>
            <p className='w-9/12  p-2'>1.5 L, 3 Cylinder Diesel Engine</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Fuel Type</p>
            <p className='w-9/12  p-2'>Diesel</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Warranty</p>
            <p className='w-9/12  p-2'>5 years or 200 000 km</p>
          </div>
          {/* Add more rows as needed */}
        </div>
      </div>
      <div>
        <div className='flex items-center m-3'>
          <div className='text-gray-500'>WEIGHT</div>
          <div className='border-b border-gray-300 flex-grow ml-4'></div>
        </div>
        <div className='w-full text-black font-normal text-base'>
          <div className='flex justify-start ml-4 mt-6'>
            <p className='w-3/12  p-2'>GVW</p>
            <p className='w-9/12  p-2'>2880</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Payload</p>
            <p className='w-9/12  p-2'>1425</p>
          </div>

          {/* Add more rows as needed */}
        </div>
      </div>
      <div>
        <div className='flex items-center m-3'>
          <div className='text-gray-500'>DIMENSION</div>
          <div className='border-b border-gray-300 flex-grow ml-4'></div>
        </div>
        <div className='w-full text-black font-normal text-base'>
          <div className='flex justify-start ml-4 mt-6'>
            <p className='w-3/12  p-2'>Wheelbase</p>
            <p className='w-9/12  p-2'>2510 mm</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Overall length</p>
            <p className='w-9/12  p-2'>4818 mm</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Overall width</p>
            <p className='w-9/12  p-2'>1842 mm</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Overall Height</p>
            <p className='w-9/12  p-2'>2056 mm</p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>
              Load body dimension (FSD) – LxBxH (mm)
            </p>
            <p className='w-9/12  p-2'>
              LxBxH (mm) (2745 X 1750 X 440) mm (9ft X 5ft 9in X 1ft 5in)
            </p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Loading platform height</p>
            <p className='w-9/12  p-2'>858 mm (2.8 ft)</p>
          </div>

          {/* Add more rows as needed */}
        </div>
      </div>
      <div>
        <div className='flex items-center m-3'>
          <div className='text-gray-500'>SUSPENSION</div>
          <div className='border-b border-gray-300 flex-grow ml-4'></div>
        </div>
        <div className='w-full text-black font-normal text-base'>
          <div className='flex justify-start ml-4 mt-6'>
            <p className='w-3/12  p-2'>Front</p>
            <p className='w-9/12  p-2'>
              Parabolic suspension with double attacking shock absorber
            </p>
          </div>
          <div className='flex justify-start ml-4'>
            <p className='w-3/12  p-2'>Rear</p>
            <p className='w-9/12  p-2'>
              Parabolic leaf suspension with double attacking shock absorber
            </p>
          </div>

          {/* Add more rows as needed */}
        </div>
      </div>
      <div>
        <div className='flex items-center m-3'>
          <div className='text-gray-500'>STEERING</div>
          <div className='border-b border-gray-300 flex-grow ml-4'></div>
        </div>
        <div className='w-full text-black font-normal text-base'>
          <div className='flex justify-start ml-4 mt-6'>
            <p className='w-3/12  p-2'>Type</p>
            <p className='w-9/12  p-2'>Power Assisted, Tiltable Column</p>
          </div>

          {/* Add more rows as needed */}
        </div>
      </div>
      <div>
        <div className='flex items-center m-3'>
          <div className='text-gray-500'>CLUTCH</div>
          <div className='border-b border-gray-300 flex-grow ml-4'></div>
        </div>
        <div className='w-full text-black font-normal text-base'>
          <div className='flex justify-start ml-4 mt-6'>
            <p className='w-3/12  p-2'>Type</p>
            <p className='w-9/12  p-2'>
              240 mm, Single dry plate, mechanical cable operated
            </p>
          </div>

          {/* Add more rows as needed */}
        </div>
      </div>
    </>
  );
};

const GalleryComponent = () => {
  const [activeTab, setActiveTab] = useState('Interior');

  const tabs = ['Interior', 'Exterior'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Interior':
        return (
          <>
            <InteriorGallery />
          </>
        );
      case 'Exterior':
        return (
          <>
            <ExteriorGallery />
          </>
        );
    }
  };

  const handleTabClick = (event, tab) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <>
      <div className='container mx-auto py-10 mt-10'>
        <div className='text-left'>
          <p className='text-4xl font-bold'>Gallery</p>
        </div>
        <ul className='flex flex-wrap justify-center text-2xl font-bold text-center rounded-4xl text-gray-500 dark:text-gray-400 mt-10'>
          {tabs.map((tab) => (
            <li className='me-2' key={tab}>
              <a
                href='#'
                onClick={(event) => handleTabClick(event, tab)}
                className={`inline-block px-6 py-4 rounded-4xl ${
                  activeTab === tab
                    ? 'text-white bg-[#9E2A31] rounded-3xl'
                    : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white hover:rounded-3xl border rounded-3xl'
                }`}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
        <div className='mt-10'>{renderContent()}</div>
      </div>
    </>
  );
};

const InteriorGallery = () => {
  return (
    <>
      <div style={{ maxWidth: '1000px', margin: 'auto' }}>
        <ReactImageGallery
          items={interior}
          showNav={true}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={true}
          autoPlay={true}
          slideInterval={5000}
          style={{ maxWidth: '100%', height: '600px' }} // Custom styles for the gallery itself
        />
      </div>
    </>
  );
};

const ExteriorGallery = () => {
  return (
    <>
      <div style={{ maxWidth: '1000px', margin: 'auto' }}>
        <ReactImageGallery
          items={exterior}
          showNav={true}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={true}
          autoPlay={true}
          slideInterval={5000}
          style={{ maxWidth: '100%', height: '600px' }} // Custom styles for the gallery itself
        />
      </div>
    </>
  );
};

export default BadaDostCNG;
