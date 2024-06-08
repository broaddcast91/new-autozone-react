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

export const scvproducts = [
  {
    id: 1,
    name: 'Bada Dost i2',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/bada-dost-i2.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 2,
    name: 'Dost Plus',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/dost-plus.jpg'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 3,
    name: 'Dost Strong',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/dost-strong.jpg'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 4,
    name: 'Bada Dost CNG',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/bada-dost-cng.jpg'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 5,
    name: 'Dost CNG',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/dost-cng.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 6,
    name: 'Bada Dost i4',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/bada-dost-i4.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 7,
    name: 'Dost LiTE',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/dost-lite.jpg'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 8,
    name: 'Dost Plus CNG',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/dost-plus-cng.jpg'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 8,
    name: 'Bada Dost i3+',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/bada-dost-i3+.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 8,
    name: 'Dost XL',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/dost-xl.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 8,
    name: 'Bada Dost i4 with LNT',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/bada-dost-i4.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 8,
    name: 'Bada Dost i3+ with LNT',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/bada-dost-i3+lnt.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/maruti-swift-car-on-road-price-in-hyderabad',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
];

export const lcvproducts = [
  {
    id: 1,
    name: 'Partnet 6 Tyre',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/partner-6-tyre.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 2,
    name: 'Partner 4 Tyre',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/partnet-4-tyre.webp'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
];

export const passengerproducts = [
  {
    id: 1,
    name: 'School Bus',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/MiTR-School-Bus_Banner-Mobile-360x288px.jpg'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
  },
  {
    id: 2,
    name: 'Staff Bus',
    price: ' 6.49 L',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/swiftlogo-new.webp',
    img: require('../../assets/car-thumbnails/02_MiTR-Staff-Bus_Banner-Mobile-360x288px.jpg'),
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Saboo_RKS_New_Swift_brouchre.pdf',
    explore: '/',
    bookNow: '/',
    power: '60',
    engine: 'Z12E',
    transmission: '5 MT/AT',
    mileage: '25.75',
    seating: '5',
    fuel: 'Petrol',
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

const BadaDosti2 = () => {
  return (
    <div className='bg-white'>
      <MainHeader />
      <BadaDosti2Hero />
      <ExploreCards />
      <VehicleInfo />
      <TabLayout />
      <GalleryComponent />
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
          src={require('../../assets/banners/Bada-Dost-i2.png')}
          alt='dost-banner'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 flex items-center justify-center h-full'>
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold text-white text-center'>
            Bada Dost i2
          </h1>
        </div>
      </div>
    </>
  );
};

const ExploreCards = () => {
  return (
    <>
      <div className='bg-white'>
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
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='p-4 rounded-lg  bg-white shadow-md'>
              <img
                src='https://via.placeholder.com/150'
                alt='Card Image'
                className='w-full h-32 object-cover rounded-t-lg'
              />
              <h2 className='mt-2 text-xl font-semibold'>Card Title 1</h2>
              <p className='mt-1 text-gray-600'>Card description goes here.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-4 bg-white rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/150'
                alt='Card Image'
                className='w-full h-32 object-cover rounded-t-lg'
              />
              <h2 className='mt-2 text-xl font-semibold'>Card Title 2</h2>
              <p className='mt-1 text-gray-600'>Card description goes here.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-4 bg-white rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/150'
                alt='Card Image'
                className='w-full h-32 object-cover rounded-t-lg'
              />
              <h2 className='mt-2 text-xl font-semibold'>Card Title 3</h2>
              <p className='mt-1 text-gray-600'>Card description goes here.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-4 bg-white rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/150'
                alt='Card Image'
                className='w-full h-32 object-cover rounded-t-lg'
              />
              <h2 className='mt-2 text-xl font-semibold'>Card Title 1</h2>
              <p className='mt-1 text-gray-600'>Card description goes here.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-4 bg-white rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/150'
                alt='Card Image'
                className='w-full h-32 object-cover rounded-t-lg'
              />
              <h2 className='mt-2 text-xl font-semibold'>Card Title 2</h2>
              <p className='mt-1 text-gray-600'>Card description goes here.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='p-4 bg-white rounded-lg shadow-md'>
              <img
                src='https://via.placeholder.com/150'
                alt='Card Image'
                className='w-full h-32 object-cover rounded-t-lg'
              />
              <h2 className='mt-2 text-xl font-semibold'>Card Title 3</h2>
              <p className='mt-1 text-gray-600'>Card description goes here.</p>
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
      <div className='container mx-auto py-10'>
        <div className='flex justify-between items-center p-4'>
          <div className='text-left'>
            <p className='text-4xl font-bold'>BADA DOST i2</p>
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
          {['BADA DOST i2', 'SPECIFICATIONS', 'GALLERY'].map((tab) => (
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
              Bada Dost i2 LX
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
                  Bada Dost i2 LS | <span className='text-xs ml-4'>Price</span>{' '}
                  ₹ 9.00 L
                </a>
              </li>
              <li>
                <a className='text-3xl hover:bg-red-200 text-[#9E2A31]'>
                  Bada Dost i2 LX | <span className='text-xs ml-4'>Price</span>{' '}
                  ₹ 9.00 L
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

  const tabs = ['Interior', 'Exterior', '360°'];

  const renderContent = () => {
    switch (activeTab) {
      case 'Interior':
        return <p>Interior Content</p>;
      case 'Exterior':
        return <p>Exterior Content</p>;
      case '360°':
        return <p>360° Content</p>;
      default:
        return null;
    }
  };

  const handleTabClick = (event, tab) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <>
      <div className='container mx-auto py-10'>
        <div className='text-left'>
          <p className='text-4xl font-bold'>Gallery</p>
        </div>
        <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-10'>
          {tabs.map((tab) => (
            <li className='me-2' key={tab}>
              <a
                href='#'
                onClick={(event) => handleTabClick(event, tab)}
                className={`inline-block px-4 py-3 rounded-lg ${
                  activeTab === tab
                    ? 'text-white bg-[#9E2A31] rounded-3xl'
                    : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
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

export default BadaDosti2;
