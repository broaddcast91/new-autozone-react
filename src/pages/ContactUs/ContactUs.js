import React from 'react';
import MainHeader from '../Header';
import Footer from '../../components/Footer/Footer';
import { FaAddressCard } from 'react-icons/fa';

import './styles.css';

const ContactUs = () => {
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
    <div className='bg-white '>
      {' '}
      <div class='container mx-auto px-2 md:px-4 pt-8 border border-white'>
        <section class='mb-32 '>
          <div class='flex justify-center'>
            <div class='text-center md:max-w-xl lg:max-w-3xl'>
              <h2 class='mb-12 px-6 text-3xl font-bold'>Contact us</h2>
            </div>
          </div>

          <div class='flex flex-wrap justify-center items-center'>
            {/* address panel */}
            <div class='w-full shrink-0 grow-0 basis-auto lg:w-7/12 '>
              <div class='flex flex-wrap'>
                <div class='mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6'>
                  <div class='flex items-start'>
                    <div class='shrink-0'>
                      <div class='inline-block rounded-md bg-teal-400-100 p-4 text-[#9E2A31]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='2'
                          stroke='currentColor'
                          class='h-6 w-6'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z'
                          />
                        </svg>
                      </div>
                    </div>
                    <div class='ml-6 grow'>
                      <p class='mb-2 font-bold'>Technical support</p>
                      <p class='text-neutral-500 '>sales@sabooautozone.com</p>
                      <p class='text-neutral-500 '>+91 91002 55555</p>
                    </div>
                  </div>
                </div>
                <div class='mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6'>
                  <div class='flex items-start'>
                    <div class='shrink-0'>
                      <div class='inline-block rounded-md bg-teal-400-100 p-4 text-[#9E2A31]'>
                        <FaAddressCard className='h-7 w-7' />
                      </div>
                    </div>
                    <div class='ml-6 grow'>
                      <p class='mb-2 font-bold '>Main Branch</p>
                      <p class='text-neutral-500 '>Saboo Autozone - Uppal</p>
                      <p class='text-neutral-500 '>Plot No:2-41/A,</p>
                      <p class='text-neutral-500 '>Near Uppal Bus Stand,</p>
                      <p class='text-neutral-500 '>
                        Warangal High Way,Uppal, Hyderabad - 500039
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* form panel */}
            <form class='mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6'>
              {/* <!-- Name and Email in one line --> */}
              <div class='flex flex-wrap mb-3 w-full'>
                <div class='w-full md:w-1/2 pr-2'>
                  <label
                    class='block font-medium mb-[2px] text-[#9E2A31]'
                    htmlFor='exampleInputName'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    class='px-2 py-2 border w-full outline-none rounded-3xl'
                    id='exampleInputName'
                    placeholder='Name'
                  />
                </div>
                <div class='w-full md:w-1/2 pl-2'>
                  <label
                    class='block font-medium mb-[2px] text-[#9E2A31]'
                    htmlFor='exampleInputEmail'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    class='px-2 py-2 border w-full outline-none rounded-3xl'
                    id='exampleInputEmail'
                    placeholder='Enter your email address'
                  />
                </div>
              </div>
              {/* 
  <!-- Phone Number and Select Outlet in one line --> */}
              <div class='flex flex-wrap mb-3 w-full'>
                <div class='w-full md:w-1/2 pr-2'>
                  <label
                    class='block font-medium mb-[2px] text-[#9E2A31]'
                    htmlFor='exampleInputPhone'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    class='px-2 py-2 border w-full outline-none rounded-3xl'
                    id='exampleInputPhone'
                    placeholder='Enter your phone number'
                  />
                </div>
                <div class='w-full md:w-1/2 pl-2'>
                  <label
                    class='block font-medium mb-[2px] text-[#9E2A31]'
                    htmlFor='exampleInputOutlet'
                  >
                    Select Outlet
                  </label>
                  <select
                    class='px-2 py-2 border w-full outline-none rounded-3xl'
                    id='exampleInputOutlet'
                  >
                    <option value='outlet1'>Attapur</option>
                    <option value='outlet2'>Gadwal</option>
                    <option value='outlet3'>Jodimetla</option>
                    <option value='outlet1'>Kukatpally</option>
                    <option value='outlet2'>LB Nagar</option>
                    <option value='outlet3'>Mahbub Nagar</option>
                    <option value='outlet1'>Nagaram</option>
                    <option value='outlet2'>Kalwakurthy</option>
                    <option value='outlet3'>Siddipet</option>
                    <option value='outlet1'>Sangareddy</option>
                    <option value='outlet2'>Uppal</option>
                    <option value='outlet3'>Vikarabad</option>
                  </select>
                </div>
              </div>

              {/* <!-- Select Option Radio Buttons --> */}
              <div class='mb-3 w-full'>
                <label class='block font-medium mb-[2px] text-[#9E2A31]'>
                  Select Option
                </label>
                <div class='flex space-x-2'>
                  <input
                    type='radio'
                    id='option1'
                    name='options'
                    value='1'
                    class='hidden peer/option1'
                  />
                  <label
                    for='option1'
                    class='peer-checked/option1:bg-[#9E2A31] peer-checked/option1:text-white flex items-center justify-center px-4 py-2 border rounded-3xl cursor-pointer transition'
                  >
                    Enquiry
                  </label>

                  <input
                    type='radio'
                    id='option2'
                    name='options'
                    value='2'
                    class='hidden peer/option2'
                  />
                  <label
                    for='option2'
                    class='peer-checked/option2:bg-[#9E2A31] peer-checked/option2:text-white flex items-center justify-center px-4 py-2 border rounded-3xl cursor-pointer transition'
                  >
                    Feedback
                  </label>

                  <input
                    type='radio'
                    id='option3'
                    name='options'
                    value='3'
                    class='hidden peer/option3'
                  />
                  <label
                    for='option3'
                    class='peer-checked/option3:bg-[#9E2A31] peer-checked/option3:text-white flex items-center justify-center px-4 py-2 border rounded-3xl cursor-pointer transition'
                  >
                    Complaint
                  </label>
                </div>
              </div>

              <div class='mb-3 w-full'>
                <label
                  class='block font-medium mb-[2px] text-[#9E2A31]'
                  htmlFor='exampleInputMessage'
                >
                  Message
                </label>
                <textarea
                  class='px-2 py-2 border rounded-3xl w-full outline-none'
                  id='exampleInputMessage'
                  placeholder='Enter your message'
                ></textarea>
              </div>

              <button
                type='button'
                class='mb-6 inline-block w-full rounded-3xl bg-[#9E2A31] px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-[#9e2a3270]'
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
