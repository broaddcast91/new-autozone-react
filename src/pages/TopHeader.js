import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className='bg-[#9E2A31] text-white'>
      <div className='container mx-auto flex justify-between items-center py-2 px-4'>
        <div className='flex items-center space-x-4'>
          <button className='text-sm hover:bg-[#6E1D22]  px-3 py-1 rounded-3xl'>
            Offers
          </button>
          <Link to='/book-a-service'>
            <button className='text-sm hover:bg-[#6E1D22] px-3 py-1 rounded-3xl'>
              Book a Service
            </button>
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaFacebookF />
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaTwitter />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaInstagram />
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
