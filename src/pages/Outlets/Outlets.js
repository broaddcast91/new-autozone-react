import React, { useEffect } from 'react';
import MainHeader from '../Header';
import Footer from '../../components/Footer/Footer';
import './styles.css';

const cardData = [
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Uppal',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Kukatpally',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - LB Nagar',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Attapur',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Jodimetla',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Nagaram',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Mahbubnagar',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Gadwal',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Nagarkurnool',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Siddipet',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Sangareddy',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Vikarabad',
    description: 'If a dog chews shoes whose shoes does he choose?',
  },
  // Add more card data as needed
];

const Outlets = () => {
  return (
    <>
      <MainHeader />
      <MultipleMarkerMap />
      <MainOutletLayout />
      <Footer />
    </>
  );
};

const MultipleMarkerMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://apis.mappls.com/advancedmaps/api/2064ed1317d1cc9972ab2cfae9750f89/map_sdk?layer=vector&v=3.0&callback=initMap1`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.initMap1 = () => {
      const map = new window.mappls.Map('map', {
        center: [28.61, 77.23],
        zoomControl: true,
        location: true,
      });

      map.addListener('load', () => {
        const geoData = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                htmlPopup: 'noida',
              },
              geometry: {
                type: 'Point',
                coordinates: [28.544, 77.5454],
              },
            },
            {
              type: 'Feature',
              properties: {
                htmlPopup: 'faridabad',
              },
              geometry: {
                type: 'Point',
                coordinates: [28.27189158, 77.2158203125],
              },
            },
            {
              type: 'Feature',
              properties: {
                htmlPopup: 'delhi',
              },
              geometry: {
                type: 'Point',
                coordinates: [28.549511, 77.267825],
              },
            },
          ],
        };
        const marker = window.mappls.Marker({
          map: map,
          position: geoData,
          icon_url: 'https://apis.mapmyindia.com/map_v3/1.png',
          fitbounds: true,
          clusters: true,
          clustersIcon: 'https://mappls.com/images/2.png',
          fitboundOptions: {
            padding: 120,
            duration: 1000,
          },
          popupOptions: {
            offset: { bottom: [0, -20] },
          },
        });
      });
    };

    return () => {
      document.body.removeChild(script);
      delete window.initMap1;
    };
  }, []);

  return (
    <div className='container mx-auto h-[350px] mb-10 py-4'>
      <div id='map' className='w-full h-[350px]'></div>
    </div>
  );
};

const MainOutletLayout = () => {
  return (
    <>
      <div className='container mx-auto py-4'>
        <div className='grid grid-cols-4 gap-4'>
          {/* Map through cardData and render Card component for each item */}
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// Card component
const Card = ({ imageUrl, title, description }) => {
  return (
    <div className='card card-compact bg-base-100 shadow-xl'>
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Go</button>
        </div>
      </div>
    </div>
  );
};

export default Outlets;
