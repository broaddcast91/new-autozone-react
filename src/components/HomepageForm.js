import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoPerson } from 'react-icons/go';
import { FaEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const HomepageForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [loading, setLoading] = useState(false);
  const { name, email, mobile } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (user.name === '') {
      toast.error('Enter Name');
    }
    if (user.mobile === '') {
      toast.error('Enter Mobile');
    }

    if (user.name !== '' && user.mobile !== '') {
      setLoading(true);

      // First API Call
      await axios
        .post('https://saboogroups.com/autozone/api/request-call', user)
        .then(function (response) {
          // Second API Call
          axios
            .post('https://autozone-backend.onrender.com/callBacks', user)
            .then(function (response) {
              // Handle the second API call response here
              navigate('thank-you');
            })
            .catch(function (error) {
              toast.error(
                'Oops! Something went wrong with the second API call'
              );
              console.log(error);
            });

          navigate('thank-you');
        })
        .catch(function (error) {
          toast.error('Oops! something went wrong');
          console.log(error);
        });
    }
  };

  // const [setLanguage] = useState();

  // useEffect(() => {
  //   const getBasha = localStorage.getItem('language');
  //   setLanguage(getBasha);
  //   const interval = setInterval(() => {
  //     const getBasha = localStorage.getItem('language');
  //     setLanguage(getBasha);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className='section py-5 bg-white text-gray-800'>
      <div className='container mx-auto px-4'>
        <h4 className='text-3xl font-bold mb-4'>Request a Call back</h4>
        <div className='font-light mb-4'>
          Please get in touch with our support team and expect a response within
          24 working hours.
        </div>
        <form onSubmit={onSubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='flex flex-col'>
              <label htmlFor='Name' className='text-sm mb-1'>
                Name
              </label>
              <div className='relative'>
                <input
                  placeholder='Name'
                  id='Name'
                  name='name'
                  value={name}
                  onChange={onInputChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <GoPerson className='absolute right-3 top-3 text-gray-400' />
              </div>
            </div>

            <div className='flex flex-col'>
              <label htmlFor='Email' className='text-sm mb-1'>
                Email
              </label>
              <div className='relative'>
                <input
                  placeholder='Email'
                  type='email'
                  id='Email'
                  name='email'
                  value={email}
                  onChange={onInputChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <FaEnvelope className='absolute right-3 top-3 text-gray-400' />
              </div>
            </div>

            <div className='flex flex-col'>
              <label htmlFor='Phone' className='text-sm mb-1'>
                Mobile
              </label>
              <div className='relative'>
                <input
                  placeholder='Mobile'
                  type='text'
                  id='Phone'
                  name='mobile'
                  value={mobile}
                  onChange={onInputChange}
                  maxLength={10}
                  className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <FiPhoneCall className='absolute right-3 top-3 text-gray-400' />
              </div>
            </div>

            <div className='flex items-end'>
              <button
                type='submit'
                className={`w-full py-2 px-4 rounded-3xl text-white bg-[#9E2A31] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  loading ? 'opacity-50' : ''
                }`}
                disabled={loading}
              >
                Submit Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomepageForm;
