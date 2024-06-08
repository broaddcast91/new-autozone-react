import React, { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';

import './styles.css';

const UltimateJourney = () => {
  let [isOpen, setIsOpen] = useState(false);

  // function open() {
  //   setIsOpen(true);
  // }

  function close() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className='section py-5 bg-white text-gray-800 mt-10 '>
        <div className='container mx-auto px-10'>
          <div className='enquiryBox flex flex-col md:flex-row'>
            {/* block 1 */}
            <div className='enquiryBoxImg flex-1'>
              <img
                decoding='async'
                alt='icon'
                src={require('../../assets/footer/footer-badaost-thumbnail.png')}
                loading='eager'
                data-lazy='true'
                className='imageTransition active w-80% h-full object-cover'
              />
            </div>
            {/* block 2 */}
            <div className='imgDetails  flex items-center justify-center text-center p-4 text-white text-3xl'>
              Get in touch with the team for an <br />
              <span className='font-bold text-yellow-300'>
                &nbsp; Ultimate Journey!
              </span>{' '}
            </div>
            {/* block 3 */}
            <div className='flex-1 flex items-center justify-center'>
              <button
                className='px-4 py-2 text-base font-bold leading-6 text-white bg-[#9E2A31] border border-transparent rounded-full hover:bg-[#9e2a32a7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
                onClick={() => setIsOpen(true)}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen}>
        <Dialog as='div' className='relative z-10' onClose={close}>
          <div
            className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
            aria-hidden='true'
          />
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4'>
              <TransitionChild
                enter='ease-out duration-300'
                enterFrom='opacity-0 transform-[scale(95%)]'
                enterTo='opacity-100 transform-[scale(100%)]'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 transform-[scale(100%)]'
                leaveTo='opacity-0 transform-[scale(95%)]'
              >
                <DialogPanel className='w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl'>
                  <DialogTitle
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Enquire Now
                  </DialogTitle>
                  <form className='mt-6 space-y-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='mt-1 h-9 p-2 border block w-full rounded-3xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        placeholder='Enter your name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='mobile'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Mobile Number
                      </label>
                      <input
                        type='tel'
                        id='mobile'
                        name='mobile'
                        className='mt-1 h-9 p-2 border block w-full rounded-3xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        placeholder='Enter your mobile number'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='mt-1 block w-full rounded-3xl border h-9 p-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        placeholder='Enter your email address'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='model'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Select Model
                      </label>
                      <select
                        id='model'
                        name='model'
                        className='mt-1 h-9 p-2 border block w-full rounded-3xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      >
                        <option>Select Model</option>
                        {/* Add options for models here */}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor='outlet'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Select Outlet
                      </label>
                      <select
                        id='outlet'
                        name='outlet'
                        className='mt-1 h-9 p-2 block w-full rounded-3xl border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      >
                        <option>Select Outlet</option>
                        {/* Add options for outlets here */}
                      </select>
                    </div>
                    <div className='m-6 space-x-4 flex justify-between'>
                      <button
                        type='button'
                        className='inline-flex justify-center w-1/2 rounded-3xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-indigo-500'
                        onClick={close} // Close button
                      >
                        Cancel
                      </button>
                      <button
                        type='submit'
                        className='inline-flex justify-center w-1/2 rounded-3xl border border-transparent bg-[#9E2A31] px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default UltimateJourney;
