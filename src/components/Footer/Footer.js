import React from 'react';
import './styles.css';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='section bg-[#F2F6F9] text-gray-800'>
        <div className='container mx-auto px-4'>{/* <TopFooter /> */}</div>
        <MiddleFooter />
        <DownFooter />
      </div>
    </>
  );
};

const MiddleFooter = () => {
  return (
    <>
      <div className='container mx-auto px-4 text-gray-900 py-8 '>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/5 mb-4 md:mb-0'>
            <h2 className='text-lg font-semibold mb-4'>SOCIAL MEDIA</h2>
            <div className='flex flex-wrap space-x-4 mt-4 items-center'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='bg-white rounded-full p-2'>
                  <FaFacebook className='h-6 w-6 text-[#9E2A31]' />
                </div>
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='bg-white rounded-full p-2'>
                  <FaXTwitter className='h-6 w-6 text-[#9E2A31]' />
                </div>
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='bg-white rounded-full p-2'>
                  <FaInstagram className='h-6 w-6 text-[#9E2A31]' />
                </div>
              </a>
            </div>
            <div className='flex flex-wrap mt-4'>
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='bg-white rounded-full p-2'>
                  <FaYoutube className='h-6 w-6 text-[#9E2A31]' />
                </div>
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='bg-white rounded-full p-2 ml-4'>
                  <FaLinkedin className='h-6 w-6 text-[#9E2A31]' />
                </div>
              </a>
            </div>
          </div>
          <div className='w-full md:w-1/5 mb-4 md:mb-0'>
            <h2 className='text-lg font-semibold mb-4'>VEHICLES</h2>
            <ul>
              <li>
                <a href='#/' className='block py-1'>
                  Bada Dost i2
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Dost Plus
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Dost Strong
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Bada Dost CNG
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Dost CNG
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/5 mb-4 md:mb-0'>
            <h2 className='text-lg font-semibold mb-4'>VEHICLES</h2>
            <ul>
              <li>
                <a href='#/' className='block py-1'>
                  Bada Dost i4
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Dost LiTE
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Dost Plus CNG
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Partner Truck
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  MiTR Staff/School Bus
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/5 mb-4 md:mb-0'>
            <h2 className='text-lg font-semibold mb-4'>OTHERS</h2>
            <ul>
              <li>
                <a href='/about' className='block py-1'>
                  About Us
                </a>
              </li>
              <li>
                <a href='/contact' className='block py-1'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Outlets
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Service
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Offers
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/5'>
            <h2 className='text-lg font-semibold mb-4'>OTHERS</h2>
            <ul>
              <li>
                <a href='#/' className='block py-1'>
                  SCV Goods Carrier
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  LCV Goods Carrier
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  LCV Passenger
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Finance
                </a>
              </li>
              <li>
                <a href='#/' className='block py-1'>
                  Insurance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const DownFooter = () => {
  return (
    <>
      <div className='flex flex-col bg-[#9E2A31] text-white'>
        <div className='flex-grow items-center'>
          <div className='container mx-auto text-center border-gray-700 p-2'>
            <p>
              &copy; {new Date().getFullYear()} Saboo Autozone. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
