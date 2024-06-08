import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const banners = [
  {
    id: 1,
    banner_img: require('../../assets/banners/banner1.webp'),
  },

  {
    id: 2,
    banner_img: require('../../assets/banners/banner2.webp'),
  },
  {
    id: 3,
    banner_img: require('../../assets/banners/banner3.webp'),
  },
  {
    id: 4,
    banner_img: require('../../assets/banners/banner4.webp'),
  },
  {
    id: 5,
    banner_img: require('../../assets/banners/banner5.webp'),
  },
  {
    id: 6,
    banner_img: require('../../assets/banners/banner6.webp'),
  },
];

export default function App() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img
              className='slider-img mw-100 w-100'
              src={banner.banner_img}
              alt={banner.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
