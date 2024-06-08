import React from 'react';

const OurCoreValues = () => {
  return (
    <div>
      <div className='section py-5 bg-white text-gray-800 mt-10 '>
        <div className='container mx-auto px-4'>
          <h4 className='text-3xl font-bold mb-4'>Our Core Values</h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 '>
            {/* Card 1 */}
            <div className='relative'>
              <img
                src={require('../../assets/core-values/innovation.png')}
                alt='Card 1'
                className='w-full h-92 object-cover rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 mb-4 flex flex-col items-center justify-center'>
                <img
                  src={require('../../assets/core-values/icons/innovation-ico.png')}
                  alt='Icon'
                  className='h-6 w-6'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-white text-lg font-bold'>Innovation</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='relative'>
              <img
                src={require('../../assets/core-values/customer-centric.png')}
                alt='Card 2'
                className='w-full h-92 object-cover rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 mb-4 flex flex-col items-center justify-center'>
                <img
                  src={require('../../assets/core-values/icons/customer-centeric-ico.png')}
                  alt='Icon'
                  className='h-6 w-6'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-white text-lg font-bold'>Customer Centric</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='relative'>
              <img
                src={require('../../assets/core-values/trust.png')}
                alt='Card 3'
                className='w-full h-92 object-cover rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 mb-4 flex flex-col items-center justify-center'>
                <img
                  src={require('../../assets/core-values/icons/trust-ico.png')}
                  alt='Icon'
                  className='h-4 w-4'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-white text-lg font-bold'>Trust</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className='relative'>
              <img
                src={require('../../assets/core-values/partnership.png')}
                alt='Card 4'
                className='w-full h-92 object-cover rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 mb-4 flex flex-col items-center justify-center'>
                <img
                  src={require('../../assets/core-values/icons/partnership-ico.png')}
                  alt='Icon'
                  className='h-6 w-6'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-white text-lg font-bold'>Partnership</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className='relative'>
              <img
                src={require('../../assets/core-values/agility.png')}
                alt='Card 5'
                className='w-full h-92 object-cover rounded-2xl'
              />
              <div className='absolute bottom-0 left-0 right-0 mb-4 flex flex-col items-center justify-center'>
                <img
                  src={require('../../assets/core-values/icons/aigility-ico.png')}
                  alt='Icon'
                  className='h-4 w-5'
                />{' '}
                {/* Replace 'icon.svg' with the path to your icon */}
                <p className='text-white text-lg font-bold'>Agility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoreValues;
