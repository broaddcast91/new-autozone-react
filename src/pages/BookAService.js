import React from 'react';
import TopHeader from './TopHeader';
import MainHeader from './Header';
import Footer from '../components/Footer/Footer';

const BookAService = () => {
  return (
    <>
      <TopHeader />
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
        src={require('../assets/banners/bookaservice-banner.webp')}
      />
      <div class='container mx-auto pb-2 px-4'>
        <section class='min-h-screen flex items-center justify-center py-4'>
          <div class='w-full max-w-5xl'>
            <div class='text-center mb-8'>
              <h2 class='text-3xl font-bold'>Book a Service</h2>
              <p class='text-lg'>
                Please fill out the form and we'll get back to you right away!
              </p>
            </div>
            {/* <!-- form --> */}
            <form className='w-full'>
              <div className='space-y-6 border rounded-3xl p-6'>
                <h3 className='text-2xl font-semibold mb-4 border-b border-[#9e2a3220]'>
                  Book a Service
                </h3>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <div>
                    <label
                      className='block font-medium mb-2 text-[#9E2A31]'
                      htmlFor='name'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      className='px-4 py-3 border w-full outline-none rounded-3xl'
                      id='name'
                      placeholder='Enter your name'
                    />
                  </div>
                  <div>
                    <label
                      className='block font-medium mb-2 text-[#9E2A31]'
                      htmlFor='email'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='px-4 py-3 border w-full outline-none rounded-3xl'
                      id='email'
                      placeholder='Enter your email address'
                    />
                  </div>
                  <div>
                    <label
                      className='block font-medium mb-2 text-[#9E2A31]'
                      htmlFor='phone'
                    >
                      Phone
                    </label>
                    <input
                      type='tel'
                      className='px-4 py-3 border w-full outline-none rounded-3xl'
                      id='phone'
                      placeholder='Enter your phone number'
                    />
                  </div>
                  <div>
                    <label
                      className='block font-medium mb-2 text-[#9E2A31]'
                      htmlFor='model'
                    >
                      Model
                    </label>
                    <select
                      className='px-4 py-3 border w-full outline-none rounded-3xl'
                      id='model'
                    >
                      <optgroup label='SCV Category'>
                        <option value='Bada Dost i2'>Bada Dost i2</option>
                        <option value='Dost Plus'>Dost Plus</option>
                        <option value='Dost Strong'>Dost Strong</option>
                        <option value='Bada Dost CNG'>Bada Dost CNG</option>
                        <option value='Dost CNG'>Dost CNG</option>
                        <option value='Bada Dost i4'>Bada Dost i4</option>
                        <option value='Dost LiTE'>Dost LiTE</option>
                        <option value='Dost Plus CNG'>Dost Plus CNG</option>
                        <option value='Bada Dost i3+'>Bada Dost i3+</option>
                        <option value='Dost XL'>Dost XL</option>
                        <option value='Bada Dost i4 LNT'>
                          Bada Dost i4 LNT
                        </option>
                        <option value='Bada Dost i3 LNT'>
                          Bada Dost i3 LNT
                        </option>
                      </optgroup>
                      <optgroup label='LCV Goods Carrier'>
                        <option value='Partner 6 tyre'>Partner 6 tyre</option>
                        <option value='Partner 4 Tyre'>Partner 4 Tyre</option>
                      </optgroup>
                      <optgroup label='LCV Passenger'>
                        <option value='SchoolBus'>SchoolBus</option>
                        <option value='Staff Bus'>Staff Bus</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label
                      className='block font-medium mb-2 text-[#9E2A31]'
                      htmlFor='outlet'
                    >
                      Outlet
                    </label>
                    <select
                      className='px-4 py-3 border w-full outline-none rounded-3xl'
                      id='outlet'
                    >
                      <option value='Attapur'>Attapur</option>
                      <option value='Gadwal'>Gadwal</option>
                      <option value='Jodimetla'>Jodimetla</option>
                      <option value='Kukatpally'>Kukatpally</option>
                      <option value='LB Nagar'>LB Nagar</option>
                      <option value='Mahbubnagar'>Mahbubnagar</option>
                      <option value='Nagaram'>Nagaram</option>
                      <option value='Kalwakurthy'>Kalwakurthy</option>
                      <option value='Siddipet'>Siddipet</option>
                      <option value='Sangareddy'>Sangareddy</option>
                      <option value='Uppal'>Uppal</option>
                      <option value='Vikarabad'>Vikarabad</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className='block font-medium mb-2 text-[#9E2A31]'
                      htmlFor='pickup'
                    >
                      Pickup Required
                    </label>
                    <select
                      className='px-4 py-3 border w-full outline-none rounded-3xl'
                      id='pickup'
                    >
                      <option value='yes'>Yes</option>
                      <option value='no'>No</option>
                    </select>
                  </div>
                </div>
                <div className='w-full mt-6'>
                  <button
                    type='submit'
                    className='inline-block w-full rounded-3xl bg-[#9E2A31] px-6 py-3 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-[#9e2a3270]'
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookAService;
