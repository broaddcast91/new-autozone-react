import React, { useEffect } from 'react';
import MainHeader from '../Header';
import Footer from '../../components/Footer/Footer';
import './styles.css';

const cardData = [
  {
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipMv0f2l75GdQ8f8jyUgiuMrT4tvmqo9W91jicnB=w426-h240-k-no',
    title: 'Saboo Autozone - Uppal',
    address1: 'Plot No:2-41/A, Near Uppal Bus Stand',
    address2: 'Warangal High Way,Uppal, Hyderabad - 500039',
    email: 'If a dog chews shoes whose shoes does he choose?',
    mapslink: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipNHveCy1juGVB4vYZHCMpjtrkrdnqRCKZSVC_IN=w408-h544-k-no',
    title: 'Saboo Autozone - Kukatpally',
    address1: 'Pragathi Nagar, Moosapet,',
    address2: 'Hyderabad, Telangana 500072',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - LB Nagar',
    address1: 'H.NO:66/4, Opp:Big bazar, Near kamineni Hospital Bypass Road,',
    address2: 'LB Nagar, Hyderabad - 500074',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Attapur',
    address1: 'H.NO: 4-25-5-1/3, Suleman Nagar, Opp: Fish Bulding,',
    address2: 'Pillar No:238, Ragendra Nager, Hyderabad,Telangana - 500052',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipOOMnEUgl_zbZiM5Q7YAGFkGIRd0w5BSvmO86jK=w426-h240-k-no',
    title: 'Saboo Autozone - Jodimetla',
    address1: 'H,NO:2-150, SYR Gardens, Jodimetla',
    address2: 'Ghatkesar, Warangal Hwy Road, Hyderabad, Telangana 501301',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipMsi0LCxwNQEwvnBjS6FNUd5IAcZGMG-tTHro-u=w408-h306-k-no',
    title: 'Saboo Autozone - Nagaram',
    address1: 'H.No : 9-107, S.V. Nagar Opp : Indian Oil Petrol Bunk Nagaram,',
    address2: ' District, Medchal, Hyderabad, Telangana 500083',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_VftllhvCazc3N9ABreZ0w&cb_client=maps_sv.tactile.gps&w=203&h=100&yaw=164.33896&pitch=0&thumbfov=100',
    title: 'Saboo Autozone - Mahbubnagar',
    address1:
      'Plot no:7 , Survey no:11, near SVS hospital, Opp:indian oil petrol bunk,',
    address2: 'Yenugonda, Mahabub Nagar, Telangana 509001',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tirqU1_ewcP_wMj46eBtMg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=84.852036&pitch=0&thumbfov=100',
    title: 'Saboo Autozone - Gadwal',
    address1:
      'Plot No:2L, P NO:50/91, Opp: JP Camp, Near Rural Police Station,',
    address2: 'Kurnool Road,Jogulamba, Gadwal, Telangana 509125',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipNVF_CzC-iWp8MfSoqmhwLqgQAuE9a5Bi-J7S6o=w408-h725-k-no',
    title: 'Saboo Autozone - Nagarkurnool',
    address1:
      'HNo: 5-93/A/1, Opp. Geetanjali Jr. College, Beside Maruthi Suzuki Car Showroom',
    address2: 'Uyyalawada, Nagarkurnool, Telangana - 509209',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipNh-MsPSXQcif0N08i5lcdNXf_lb3R4t6SKI484=w408-h902-k-no',
    title: 'Saboo Autozone - Siddipet',
    address1: 'Plot No:11, Ponnal Villege Road,',
    address2: 'Siddipet, Telangana 502103',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Sangareddy',
    address1: 'Sy No: 777/3, KANDI(V&M, Beside MAR Garden,',
    address2: 'Sangareddy, Telangana 502295',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
  },
  {
    imageUrl:
      'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    title: 'Saboo Autozone - Vikarabad',
    address1: 'H NO; 3-2-41/1 Yennepally Opp. Mazeed,',
    address2: 'Hyderabad Rd, Vikarabad, Telangana 501101',
    email: 'If a dog chews shoes whose shoes does he choose?',
    description4: 'If a dog chews shoes whose shoes does he choose?',
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
    <div className='container mx-auto h-[450px] mb-10 py-4'>
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
              address1={card.address1}
              address2={card.address2}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// Card component
const Card = ({ imageUrl, title, address1, address2 }) => {
  return (
    <div className='card card-compact bg-base-100 shadow-xl m-4'>
      <figure>
        <img src={imageUrl} alt={title} className='w-full h-48 object-cover' />
      </figure>

      <div className='p-4'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className='text-gray-700'>{address1}</p>
        <p className='text-gray-700'>{address2}</p>
        <div className='flex justify-end mt-4'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'>
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Outlets;
