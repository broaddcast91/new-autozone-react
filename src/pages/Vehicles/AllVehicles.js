import React from 'react';
import MainHeader from '../Header';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <SCVGC />
      <LCVGC />
      <LCVPC />
    </>
  );
};

const SCVGC = () => {
  const SCVData = [
    {
      id: 1,
      img: require('../../assets/car-thumbnails/bada-dost-i2.webp'),
      title: 'Bada Dost i2',
      description: 'This is the description for card 1',
    },
    {
      id: 2,
      img: require('../../assets/car-thumbnails/dost-plus.jpg'),
      title: 'Dost Plus',
      description: 'This is the description for card 2',
    },
    {
      id: 3,
      img: require('../../assets/car-thumbnails/dost-strong.jpg'),
      title: 'Dost Strong',
      description: 'This is the description for card 3',
    },
    {
      id: 4,
      img: require('../../assets/car-thumbnails/bada-dost-cng.jpg'),
      title: 'Bada Dost CNG',
      description: 'This is the description for card 4',
    },
    {
      id: 5,
      img: require('../../assets/car-thumbnails/dost-cng.webp'),
      title: 'Dost CNG',
      description: 'This is the description for card 5',
    },
    {
      id: 6,
      img: require('../../assets/car-thumbnails/bada-dost-i4.webp'),
      title: 'Bada Dost i4',
      description: 'This is the description for card 6',
    },
    {
      id: 7,
      img: require('../../assets/car-thumbnails/dost-lite.jpg'),
      title: 'Dost LiTE',
      description: 'This is the description for card 7',
    },
    {
      id: 8,
      img: require('../../assets/car-thumbnails/dost-plus-cng.jpg'),
      title: 'Dost Plus CNG',
      description: 'This is the description for card 8',
    },
    {
      id: 9,
      img: require('../../assets/car-thumbnails/bada-dost-i3+.webp'),
      title: 'Bada Dost i3+',
      description: 'This is the description for card 9',
    },
    {
      id: 10,
      img: require('../../assets/car-thumbnails/dost-xl.webp'),
      title: 'Dost XL',
      description: 'This is the description for card 10',
    },
    {
      id: 11,
      img: require('../../assets/car-thumbnails/bada-dost-i4.webp'),
      title: 'Bada Dost i4 with LNT',
      description: 'This is the description for card 11',
    },
    {
      id: 12,
      img: require('../../assets/car-thumbnails/bada-dost-i3+lnt.webp'),
      title: 'Bada Dost i3_ with LNT',
      description: 'This is the description for card 12',
    },
  ];
  return (
    <>
      <div className='bg-white'>
        <div className='container mx-auto p-4 '>
          <h4 className='text-3xl font-bold mb-4 mt-10'>SCV Goods Carrier</h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {SCVData.map((card) => (
              <div
                key={card.id}
                className='bg-white shadow-md rounded-lg flex flex-col'
              >
                <div className='aspect-w-1 aspect-h-1 w-full'>
                  <img
                    src={card.img}
                    alt={card.title}
                    className='object-cover rounded-t-lg'
                  />
                </div>
                <div className='p-4 flex flex-col items-center'>
                  <h2 className='text-lg font-semibold mb-1'>{card.title}</h2>
                  <p className='text-gray-600 text-sm text-center'>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const LCVGC = () => {
  const LCVData = [
    {
      id: 1,
      img: require('../../assets/car-thumbnails/partner-6-tyre.webp'),
      title: 'Partnet 6 Tyre',
      description: 'This is the description for card 1',
    },
    {
      id: 2,
      img: require('../../assets/car-thumbnails/partnet-4-tyre.webp'),
      title: 'Partner 4 Tyre',
      description: 'This is the description for card 2',
    },
  ];
  return (
    <>
      <div className='bg-white'>
        <div className='container mx-auto p-4 '>
          <h4 className='text-3xl font-bold mb-4 mt-10'>LCV Goods Carrier</h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {LCVData.map((card) => (
              <div
                key={card.id}
                className='bg-white shadow-md rounded-lg flex flex-col'
              >
                <div className='aspect-w-1 aspect-h-1 w-full'>
                  <img
                    src={card.img}
                    alt={card.title}
                    className='object-cover rounded-t-lg'
                  />
                </div>
                <div className='p-4 flex flex-col items-center'>
                  <h2 className='text-lg font-semibold mb-1'>{card.title}</h2>
                  <p className='text-gray-600 text-sm text-center'>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const LCVPC = () => {
  const LCVPData = [
    {
      id: 1,
      img: require('../../assets/car-thumbnails/MiTR-School-Bus_Banner-Mobile-360x288px.jpg'),
      title: 'School Bus',
      description: 'This is the description for card 1',
    },
    {
      id: 2,
      img: require('../../assets/car-thumbnails/02_MiTR-Staff-Bus_Banner-Mobile-360x288px.jpg'),
      title: 'Staff Bus',
      description: 'This is the description for card 2',
    },
  ];
  return (
    <>
      <div className='bg-white'>
        <div className='container mx-auto p-4 '>
          <h4 className='text-3xl font-bold mb-4 mt-10'>LCV Passenger</h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {LCVPData.map((card) => (
              <div
                key={card.id}
                className='bg-white shadow-md rounded-lg flex flex-col'
              >
                <div className='aspect-w-1 aspect-h-1 w-full'>
                  <img
                    src={card.img}
                    alt={card.title}
                    className='object-cover rounded-t-lg'
                  />
                </div>
                <div className='p-4 flex flex-col items-center'>
                  <h2 className='text-lg font-semibold mb-1'>{card.title}</h2>
                  <p className='text-gray-600 text-sm text-center'>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const AllVehicles = () => {
  return (
    <>
      <MainHeader />
      <AllVehiclesHero />
      <MainLayout />
      <Footer />
    </>
  );
};

const AllVehiclesHero = () => {
  return (
    <>
      <div className='relative h-80 overflow-hidden border'>
        <img
          className='w-full h-full object-cover'
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/autozone-2024/assets/banners/autozone-all-vehicles-banner.png'
          alt='dost-banner'
        />
      </div>
    </>
  );
};

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col h-full'>
      <div className='h-48 overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className='px-6 py-4 flex-grow'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  );
};

export default AllVehicles;
