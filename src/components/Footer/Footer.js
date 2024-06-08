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
      <div className='serviceCardImg section bg-[#F2F6F9] text-gray-800 mt-10'>
        <div className='container mx-auto px-4'>
          <TopFooter />
        </div>

        <MiddleFooter />
        <DownFooter />
      </div>
    </>
  );
};

const TopFooter = () => {
  return (
    <>
      <div className='flex flex-wrap'>
        {/* block 1 */}
        <div className='w-full sm:w-1/2 md:w-1/5 p-4 border-b md:border-b-0 md:border-r'>
          <div className='uppercase font-bold tracking-widest'>
            social media
          </div>
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
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='bg-white rounded-full p-2'>
                <FaLinkedin className='h-6 w-6 text-[#9E2A31]' />
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
          </div>
        </div>
        {/* block 2 */}
        <div className='w-full sm:w-1/2 md:w-4/5 p-4'>
          <div className='uppercase font-bold tracking-widest'>
            Request on email
          </div>
          <div className='mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 w-full md:w-2/3 focus:ring-[#9E2A31]'
            />
            <button className='w-full md:w-32 p-2 bg-[#9E2A31] text-white rounded-3xl px-4 hover:bg-[#7c1f28] uppercase tracking-widest flex items-center justify-center'>
              Signup
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
            </button>
          </div>
        </div>
      </div>
      <div class='border-b mt-2'></div>
    </>
  );
};

const MiddleFooter = () => {
  return (
    <>
      <div class=' container mx-auto px-4 text-gray-900 py-8'>
        <div class='flex flex-wrap justify-between'>
          <div class='w-full md:w-1/4'>
            <h2 class='text-lg font-semibold mb-4'>VEHICLES</h2>
            <ul>
              <li>
                <a href='#/' class='block py-1'>
                  Bada Dost i2
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Dost Plus
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Dost Strong
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Bada Dost CNG
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Dost CNG
                </a>
              </li>
            </ul>
          </div>

          <div class='w-full md:w-1/4'>
            <h2 class='text-lg font-semibold mb-4'>VEHICLES</h2>
            <ul>
              <li>
                <a href='#/' class='block py-1'>
                  Bada Dost i4
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Dost LiTE
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Dost Plus CNG
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Partner Truck
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  MiTR Staff/School Bus
                </a>
              </li>
            </ul>
          </div>

          <div class='w-full md:w-1/4'>
            <h2 class='text-lg font-semibold mb-4'>OTHERS</h2>
            <ul>
              <li>
                <a href='#/' class='block py-1'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Outlets
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Service
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Offers
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div class='w-full md:w-1/4'>
            <h2 class='text-lg font-semibold mb-4'>OTHERS</h2>
            <ul>
              <li>
                <a href='#/' class='block py-1'>
                  SCV Goods Carrier
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  LCV Goods Carrier
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  LCV Passenger
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
                  Finance
                </a>
              </li>
              <li>
                <a href='#/' class='block py-1'>
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
