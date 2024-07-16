import React from 'react';
import TopHeader from './TopHeader';
import MainHeader from './Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-customRed via-customRed to-customRed'>
        <div className='bg-white p-8 rounded-lg shadow-lg text-center max-w-md'>
          <h1 className='text-3xl font-bold text-gray-800 mb-4'>Thank You!</h1>
          <p className='text-gray-600 mb-6'>
            We appreciate your support. Your enquiry has been submitted
            successfully.
          </p>
          <div className='flex justify-center'>
            <Link to='/'>
              {' '}
              <button className='bg-[#9E2A31] text-white px-4 py-2 rounded-3xl hover:bg-[#a45358] transition duration-300'>
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thankyou;
