import React from 'react';
import MainHeader from '../Header';
import Footer from '../../components/Footer/Footer';

import './styles.css';

const Finance = () => {
  return (
    <>
      <MainHeader />
      <MainContactUsLayout />
      <Footer />
    </>
  );
};

const MainContactUsLayout = () => {
  return (
    <div className='bg-white'>
      {' '}
      <img
        className='slider-img mw-100 w-100'
        src={require('../../assets/banners/finance-banner.19cc1aa69c9014f9c944.webp')}
      />
<div class='container mx-auto pb-2 px-4'>
  <section class='min-h-screen flex items-center justify-center py-4'>
    <div class='w-full max-w-5xl'>
      <div class='text-center mb-8'>
        <h2 class='text-3xl font-bold'>Finance</h2>
      </div>
      {/* form */}
      <form class='w-full'>
        <div class='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {/* <!-- First Section --> */}
          <div class='col-span-1 border rounded-lg p-4'>
            <div className='m-4'>
              <div class='mb-4'>
                <label class='block font-medium mb-2 text-[#9E2A31]' htmlFor='name'>
                  Name
                </label>
                <input
                  type='text'
                  class='px-4 py-3 border w-full outline-none rounded-3xl'
                  id='name'
                  placeholder='Name'
                />
              </div>
              <div class='mb-4'>
                <label class='block font-medium mb-2 text-[#9E2A31]' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  class='px-4 py-3 border w-full outline-none rounded-3xl'
                  id='email'
                  placeholder='Enter your email address'
                />
              </div>
              <div class='mb-4'>
                <label class='block font-medium mb-2 text-[#9E2A31]' htmlFor='phone'>
                  Phone
                </label>
                <input
                  type='tel'
                  class='px-4 py-3 border w-full outline-none rounded-3xl'
                  id='phone'
                  placeholder='Enter your phone number'
                />
              </div>
              <div class='mb-4'>
                <label class='block font-medium mb-2 text-[#9E2A31]' htmlFor='outlet'>
                  Outlet
                </label>
                <input
                  type='text'
                  class='px-4 py-3 border w-full outline-none rounded-3xl'
                  id='outlet'
                  placeholder='Enter the outlet name'
                />
              </div>
              <div class='mb-4'>
                <label class='block font-medium mb-2 text-[#9E2A31]' htmlFor='message'>
                  Message
                </label>
                <textarea
                  class='px-4 py-3 border rounded-3xl w-full outline-none'
                  id='message'
                  rows='6'
                  placeholder='Your message'
                ></textarea>
              </div>
            </div>
          </div>

          {/* <!-- Second Section --> */}
          <div class='col-span-1 border rounded-lg p-4'>
            <div className='m-4'>
              <div class='mb-4'>
                <label class='block font-medium mb-2 text-[#9E2A31]' htmlFor='model'>
                  Model
                </label>
                <input
                  type='text'
                  class='px-4 py-3 border w-full outline-none rounded-3xl'
                  id='model'
                  placeholder='Enter the model'
                />
              </div>
              <div class='mb-4'>
                <label class='block font-medium mb-2 text-[#9E2A31]' htmlFor='purchase-time'>
                  Purchase Time
                </label>
                <input
                  type='text'
                  class='px-4 py-3 border w-full outline-none rounded-3xl'
                  id='purchase-time'
                  placeholder='Enter the purchase time'
                />
              </div>
              <div class='mb-4'>
                <label class='block font-medium mb-2 text-[#9E2A31]' htmlFor='loan-amount'>
                  Loan Amount
                </label>
                <input
                  type='number'
                  class='px-4 py-3 border w-full outline-none rounded-3xl'
                  id='loan-amount'
                  placeholder='Enter the loan amount'
                />
              </div>
              <div class='mb-4'>
                <label class='block font-medium mb-2 text-[#9E2A31]' htmlFor='loan-duration'>
                  Loan Duration
                </label>
                <input
                  type='text'
                  class='px-4 py-3 border w-full outline-none rounded-3xl'
                  id='loan-duration'
                  placeholder='Enter the loan duration'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-4'>
          <button
            type='button'
            class='inline-block w-full rounded-3xl bg-[#9E2A31] px-6 py-3 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-[#9e2a3270]'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
</div>


    </div>
  );
};

export default Finance;
