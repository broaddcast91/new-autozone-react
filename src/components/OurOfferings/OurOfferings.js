import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Card = ({ image, prehead, title, price }) => (
  <li className='w-full lg:w-1/3 px-2 mb-4'>
    <div className='flex flex-col bg-[#eee] rounded-3xl shadow-lg border relative overflow-hidden'>
      <div className='flex-auto overflow-hidden'>
        <Link to='/'>
          <img
            src={image}
            alt='thumbnail'
            className='mx-auto product_image lg:h-[250px] h-[250px] w-full object-cover object-center'
          />
        </Link>
      </div>
      <div className='flex-auto bg-white serviceCard'>
        <div className='p-6'>
          <div className='flex items-center justify-between uppercase font-semibold  text-[#9E2A31] h-6'>
            <p className='truncate tracking-widest'>{prehead}</p>
          </div>
          <div className='flex items-center justify-between text-3xl font-semibold h-10 mb-2'>
            <p className='truncate'>{title}</p>
          </div>
          <div className='flex items-center justify-between h-12 mb-4'>
            <p>{price}</p>
          </div>
          <div className='flex items-center justify-left space-x-3 pb-5'>
            <a
              href='#_'
              className='inline-flex items-center justify-center w-full px-12 py-2 text-base font-light leading-6 text-black border rounded-full md:w-auto h-12 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
            >
              Learn More
              <svg
                className='ml-2'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5 12h14M12 5l7 7-7 7'
                  stroke='currentColor'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
);

const OurOfferings = () => {
  const cardData = [
    {
      image: require('../../assets/our-offerings-thumbnails/40_Re-AL-banner-image_shutterstock_2151193513.jpeg'),
      prehead: 'aftermarket',
      title: 'Re-Al',
      price: 'Used vehicle selling, buying and exchanging platform',
    },
    {
      image: require('../../assets/our-offerings-thumbnails/speedometer.png'),
      prehead: 'telematics',
      title: 'iAlert',
      price:
        'iAlert 3.0 is an industry first cutting edhe telematics solutions available across vehicle and fuel platforms',
    },
    {
      image: require('../../assets/our-offerings-thumbnails/financHome.jpg'),
      prehead: 'customer support',
      title: 'Vehicle Finance',
      price:
        'Enjoy simple and hassle-free finance options for your trucks with maximum funding options',
    },
  ];
  return (
    <div className='section py-5 bg-white text-gray-800 mt-10'>
      <div className='container mx-auto px-4'>
        <h4 className='text-3xl font-bold mb-4'>Our Offerings</h4>
        <ul className='flex flex-wrap justify-between'>
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              prehead={card.prehead}
              title={card.title}
              price={card.price}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurOfferings;
