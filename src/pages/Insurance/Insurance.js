import React from 'react';
import MainHeader from '../Header';
import Footer from '../../components/Footer/Footer';

const Insurance = () => {
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
        src={require('../../assets/banners/insurance-banner.61ee4b64d74020e6a512.webp')}
      />
      <div class='container mx-auto pb-2 px-4'>
        <section class='min-h-screen flex items-center justify-center py-4'>
          <div class='w-full max-w-5xl'>
            <div class='text-center mb-8'>
              <h2 class='text-3xl font-bold'>Insurance</h2>
              <p class='text-lg'>
                Please fill out the form and we'll get back to you right away!
              </p>
            </div>
            {/* <!-- form --> */}
            <form class='w-full'>
              <div class='space-y-6 space border rounded-3xl'>
                {/* <!-- Car Details Section --> */}
                <div class='m-2 p-6 '>
                  <h3 class='text-2xl font-semibold mb-4 border-b border-[#9e2a3220]'>
                    Car Details
                  </h3>
                  <div class='grid grid-cols-1 gap-4 md:grid-cols-3'>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='model'
                      >
                        Model
                      </label>
                      <input
                        type='text'
                        class='px-4 py-3 border w-full outline-none rounded-3xl'
                        id='model'
                        placeholder='Enter the model'
                      />
                    </div>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='reg-no'
                      >
                        Registration Number
                      </label>
                      <input
                        type='text'
                        class='px-4 py-3 border w-full outline-none rounded-3xl'
                        id='reg-no'
                        placeholder='Enter the registration number'
                      />
                    </div>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='reg-year'
                      >
                        Registration Year
                      </label>
                      <input
                        type='number'
                        class='px-4 py-3 border w-full outline-none rounded-3xl'
                        id='reg-year'
                        placeholder='Enter the registration year'
                      />
                    </div>
                  </div>
                </div>
                {/* 
          <!-- Policy Details Section --> */}
                <div class=' rounded-lg p-6'>
                  <h3 class='text-2xl font-semibold mb-4 border-b border-[#9e2a3220]'>
                    Policy Details
                  </h3>
                  <div class='grid grid-cols-1 gap-4 md:grid-cols-3'>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='policy-num'
                      >
                        Policy Number
                      </label>
                      <input
                        type='text'
                        class='px-4 py-3 border w-full outline-none rounded-3xl'
                        id='policy-num'
                        placeholder='Enter the policy number'
                      />
                    </div>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='insurance'
                      >
                        Insurance
                      </label>
                      <input
                        type='text'
                        class='px-4 py-3 border w-full outline-none rounded-3xl'
                        id='insurance'
                        placeholder='Enter the insurance provider'
                      />
                    </div>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='expiry-date'
                      >
                        Expiry Date
                      </label>
                      <input
                        type='date'
                        class='px-4 py-3 border w-full outline-none rounded-3xl '
                        id='expiry-date'
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- Contact Details Section --> */}
                <div class=' rounded-lg p-6'>
                  <h3 class='text-2xl font-semibold mb-4 border-b border-[#9e2a3220]'>
                    Contact Details
                  </h3>
                  <div class='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='name'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        class='px-4 py-3 border w-full outline-none rounded-3xl'
                        id='name'
                        placeholder='Enter your name'
                      />
                    </div>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='email'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        class='px-4 py-3 border w-full outline-none rounded-3xl'
                        id='email'
                        placeholder='Enter your email address'
                      />
                    </div>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='phone'
                      >
                        Phone
                      </label>
                      <input
                        type='tel'
                        class='px-4 py-3 border w-full outline-none rounded-3xl'
                        id='phone'
                        placeholder='Enter your phone number'
                      />
                    </div>
                    <div>
                      <label
                        class='block font-medium mb-2 text-[#9E2A31]'
                        for='claim'
                      >
                        Claim
                      </label>
                      <textarea
                        class='px-4 py-3 border w-full outline-none rounded-3xl'
                        id='claim'
                        rows='3'
                        placeholder='Enter your claim details'
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class='w-full mt-6'>
                <button
                  type='submit'
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

export default Insurance;
