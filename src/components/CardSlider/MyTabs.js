import { Tab } from '@headlessui/react';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MyTabs = () => {
  return (
    <div className='w-full'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 border-b-2 border-gray-300'>
          {['SCV Goods Carrier', 'LCV Goods Carrier', 'LCV Passenger'].map(
            (tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm font-medium leading-5 text-gray-700',
                    'focus:outline-none',
                    selected
                      ? 'border-b-4 border-[#9E2A31] font-bold'
                      : 'hover:text-[#9E2A31]'
                  )
                }
              >
                {tab}
              </Tab>
            )
          )}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9E2A31] focus:ring-white'
            )}
          >
            <div>
              <Tab1Content />
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9E2A31] focus:ring-white'
            )}
          >
            <Tab2Content />
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#9E2A31] focus:ring-white'
            )}
          >
            <Tab3Content />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

const Tab1Content = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <div>
        <Swiper
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className='mySwiper'
        >
          {scvproducts.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='w-full max-w-lg flex flex-col bg-[#eee]   border relative overflow-hidden rounded-3xl'>
                <div className='flex-auto overflow-hidden'>
                  <Link to={item.explore}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center'
                    />
                  </Link>
                </div>
                <div className='flex-auto bg-white'>
                  <div>
                    <div className='flex items-center justify-between p-5  text-xl font-semibold'>
                      <p>{item.name}</p>
                    </div>
                    <div className='flex items-center justify-between p-5'>
                      <p>₹&nbsp;{item.price}&nbsp;Onwards</p>
                    </div>
                    <div className='flex items-center justify-center space-x-3 pb-5'>
                      <a
                        href='#_'
                        className='inline-flex items-center justify-center w-full px-12 py-2 text-base font-bold leading-6 text-white bg-[#9E2A31] border border-transparent rounded-full md:w-auto hover:bg-[#9e2a32a7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            ref={navigationPrevRef}
            className='absolute left-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer'
          >
            <GrFormPrevious />
          </div>
          <div
            ref={navigationNextRef}
            className='absolute right-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer'
          >
            <GrFormNext />
          </div>
        </Swiper>
      </div>
    </>
  );
};

const Tab2Content = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <div>
        <Swiper
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
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
          className='mySwiper'
        >
          {lcvproducts.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='w-full max-w-lg flex flex-col bg-[#eee]   border relative overflow-hidden rounded-3xl'>
                <div className='flex-auto overflow-hidden'>
                  <Link to={item.explore}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center'
                    />
                  </Link>
                </div>
                <div className='flex-auto bg-white'>
                  <div>
                    <div className='flex items-center justify-between p-5  text-xl font-semibold'>
                      <p>{item.name}</p>
                    </div>
                    <div className='flex items-center justify-between p-5'>
                      <p>₹&nbsp;{item.price}&nbsp;Onwards</p>
                    </div>
                    <div className='flex items-center justify-center space-x-3 pb-5'>
                      <a
                        href='#_'
                        className='inline-flex items-center justify-center w-full px-12 py-2 text-base font-bold leading-6 text-white bg-[#9E2A31] border border-transparent rounded-full md:w-auto hover:bg-[#9e2a32a7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            ref={navigationPrevRef}
            className='absolute left-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer'
          >
            <GrFormPrevious />
          </div>
          <div
            ref={navigationNextRef}
            className='absolute right-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer'
          >
            <GrFormNext />
          </div>
        </Swiper>
      </div>
    </>
  );
};

const Tab3Content = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <div>
        <Swiper
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
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
          className='mySwiper'
        >
          {passengerproducts.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col bg-[#eee] rounded-3xl shadow-lg border relative overflow-hidden w-full'>
                <div className='flex-auto overflow-hidden'>
                  <Link to={item.explore}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className='mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center'
                    />
                  </Link>
                </div>
                <div className='flex-auto bg-white'>
                  <div>
                    <div className='flex items-center justify-between p-5 font-semibold'>
                      <p>{item.name}</p>
                    </div>
                    <div className='flex items-center justify-between p-5'>
                      <p>₹&nbsp;{item.price}&nbsp;Onwards</p>
                    </div>
                    <div className='flex items-center justify-center space-x-3 pb-5'>
                      <a
                        href='#_'
                        className='inline-flex items-center justify-center w-full px-12 py-2 text-base font-bold leading-6 text-white bg-[#9E2A31] border border-transparent rounded-full md:w-auto hover:bg-[#9e2a32a7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div
            ref={navigationPrevRef}
            className='absolute left-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer'
          >
            <GrFormPrevious />
          </div>
          <div
            ref={navigationNextRef}
            className='absolute right-3 top-1/2 z-10 bg-[#9E2A31] rounded-full p-3 cursor-pointer'
          >
            <GrFormNext />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default MyTabs;
