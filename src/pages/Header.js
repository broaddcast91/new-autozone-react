import React, { Fragment, useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const tabs = ['SCV Goods Carrier', 'LCV Goods Carrier', 'LCV Passenger'];

const navigation = {
  categories: [
    {
      id: '1',
      name: 'Vehicles',
      featured: [
        {
          name: 'Bada Dost i2',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Invicto+Logo-header.webp',
          href: '/bada-dost-i2',
          imageSrc: require('../assets/thumbnails/Bada-Dost-i2.jpg'),
          imageAlt: 'Bada Dost i2',
          price: '₹ 24,79,000*',
        },
        {
          name: 'Dost Plus',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp',
          href: '/dost-plus',
          imageSrc: require('../assets/thumbnails/Dost-Plus.jpg'),
          imageAlt: 'Dost Plus',
          price: '₹ 7,46,500*',
        },
        {
          name: 'Dost Strong',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/120x30+black.webp',
          href: '/dost-strong',
          imageSrc: require('../assets/thumbnails/Dost-Strong.jpg'),
          imageAlt: 'Dost Strong',
          price: '₹ 12,74,000*',
        },
        {
          name: 'Bada Dost CNG',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/GV-logo-204x37+webp.webp',
          href: '/bada-dost-cng',
          imageSrc: require('../assets/thumbnails/Bada-Dost-CNG-1.jpg'),
          imageAlt: 'Bada Dost Strong',
          price: ' ₹ 10,45,000*',
        },
        {
          name: 'Dost CNG',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Logo-XL6.webp',
          href: '/dost-cng',
          imageSrc: require('../assets/thumbnails/DOST-CNG-1-1.jpg'),
          imageAlt: 'Dost CNG',
          price: '₹ 11,29,000*',
        },

        {
          name: 'Bada Dost i4',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Ciaz-logo.webp',
          href: '/bada-dost-i4',
          imageSrc: require('../assets/thumbnails/Bada-Dost-i4.jpg'),
          imageAlt: 'Bada Dost i4',
          price: ' ₹ 8,99,500*',
        },
        {
          name: 'Dost LiTE',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/newage_baleno_logo.png',
          href: '/dost-lite',
          imageSrc: require('../assets/thumbnails/Dost-Lite.jpg'),
          imageAlt: 'Dost LiTE',
          price: '₹ 6,49,000*',
        },
        {
          name: 'Dost Plus CNG',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Maruti-Suzuki-Ignis-logo.webp',
          href: '/dost-plus-cng',
          imageSrc: require('../assets/thumbnails/DOST-PLUS-CNG-1-2.jpg'),
          imageAlt: 'Dost Plus CNG',
          price: '₹ 5,35,000*',
        },
      ],

      featured2: [
        {
          name: 'Partner 6 Type',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Invicto+Logo-header.webp',
          href: '/maruti-invicto-price-in-hyderabad',
          imageSrc: require('../assets/thumbnails/Partner_6T_HSD-1.jpg'),
          imageAlt: 'Partner 6 Type',
          price: '₹ 24,79,000*',
        },
        {
          name: 'Partner 4 Tyre',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp',
          href: '/maruti-fronx-price-in-hyderabad',
          imageSrc: require('../assets/thumbnails/Partner-4T_HSD-2.jpg'),
          imageAlt: 'Partner 4 Tyre',
          price: '₹ 7,46,500*',
        },
      ],
      featured3: [
        {
          name: 'School Bus',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Invicto+Logo-header.webp',
          href: '/school-bus',
          imageSrc: require('../assets/thumbnails/MiTR-School-Bus.jpg'),
          imageAlt: 'School Bus',
          price: '₹ 24,79,000*',
        },
        {
          name: 'Staff Bus',
          brand_logo:
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp',
          href: '/staff-bus',
          imageSrc: require('../assets/thumbnails/MiTR-Staff-Bus.jpg'),
          imageAlt: 'Staff Bus',
          price: '₹ 7,46,500*',
        },
      ],
    },
  ],

  servicepages: [
    {
      name: 'Insurance',
      to: '/insurance',
    },
    {
      name: 'Finance',
      to: '/finance',
    },
  ],

  outlets: [
    {
      name: 'Showrooms',
      to: '/showrooms',
    },
    {
      name: 'Workshop',
      to: '/workshop',
    },
  ],
  more: [
    {
      name: 'CNG',
      to: '/cng',
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function MainHeader({ category, menuoption }) {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={navbar ? 'bg-white px-0 border' : 'bg-white px-3 border'}>
      {/* Mobile menu */}
      {open && (
        <div className='fixed inset-0 flex z-40 lg:hidden'>
          <div
            className='fixed inset-0 bg-black bg-opacity-25'
            aria-hidden='true'
            onClick={() => setOpen(false)}
          ></div>
          <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
            <div className='px-4 pt-5 pb-2 flex'>
              <button
                type='button'
                className='text-gray-400 hover:text-gray-500'
                onClick={() => setOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='mt-2'>
              <nav className='space-y-1'>
                <Link
                  to='/'
                  className='block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100'
                >
                  Home
                </Link>

                <Link
                  to='/about'
                  className='block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100'
                >
                  About Us
                </Link>

                {navigation.categories.map((category) => (
                  <Popover key={category.name}>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-red-600' : 'text-black-200',
                            'flex items-center justify-between w-full px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100'
                          )}
                        >
                          <span>{category.name}</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-red-600' : 'text-black-200',
                              'ml-2 h-5 w-5 text-gray-400'
                            )}
                            aria-hidden='true'
                          />
                        </Popover.Button>
                        <Transition
                          show={open}
                          enter='transition ease-out duration-200'
                          enterFrom='opacity-0'
                          enterTo='opacity-100'
                          leave='transition ease-in duration-150'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <Popover.Panel static>
                            <div className='space-y-1'>
                              {/* Display featured */}
                              {category.featured.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className='block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100'
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                <Link
                  to='/contact'
                  className='block px-4 py-2 text-base font-medium text-gray-900 hover:bg-gray-100'
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Desktop, Tab Menu */}
      <div
        className={
          navbar
            ? 'fixed top-0 z-50 w-full bg-white shadow-2xl drop-shadow-2xl'
            : ''
        }
      >
        <header className='relative'>
          <nav aria-label='Top' className='container mx-auto px-4'>
            <div className='border-gray-200'>
              <div className='h-16 flex items-center'>
                {/* Logo */}
                <div className='mr-auto flex lg:ml-0 ml-2'>
                  <Link to='/'>
                    <img
                      className='h-12 w-auto'
                      src={require('../assets/logos/logo.e6e45f945dfdd434642e.webp')}
                      alt='logo'
                    />
                  </Link>
                </div>

                <button
                  type='button'
                  className='p-2 rounded-md text-gray-200 lg:hidden'
                  onClick={() => setOpen(true)}
                >
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Flyout menus */}
                <Popover.Group className='hidden ml-auto lg:block lg:self-stretch'>
                  <div className='h-full flex space-x-8'>
                    <Link
                      key='Home'
                      to='/'
                      className='flex items-center text-sm font-medium text-black-200 hover:text-gray-400'
                    >
                      Home
                    </Link>
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className='flex'>
                        {({ open }) => (
                          <>
                            <div className='relative flex'>
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? 'border-red-600 text-red-600'
                                    : 'border-transparent text-black-200 hover:text-red-400',
                                  'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px outline-none focus:outline-none'
                                )}
                              >
                                {category.name}
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? 'text-red-600' : 'text-black-200',
                                    'ml-1 h-4 w-4 group-hover:text-black-200'
                                  )}
                                />
                              </Popover.Button>
                            </div>

                            <Transition
                              as={React.Fragment}
                              enter='transition ease-out duration-200'
                              enterFrom='opacity-0'
                              enterTo='opacity-100'
                              leave='transition ease-in duration-150'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                              <Popover.Panel className='absolute top-full inset-x-0 text-sm text-red-500 shadow z-10'>
                                <div
                                  className='absolute inset-0 top-1/1'
                                  aria-hidden='true'
                                />

                                <div className='relative bg-white'>
                                  <div className='container mx-auto px-8'>
                                    <div className='flex'>
                                      {/* Tabs on the left */}
                                      <div className='w-1/4 p-6'>
                                        {tabs.map((tab) => (
                                          <div
                                            key={tab}
                                            className={`cursor-pointer p-3 mb-4 text-lg rounded-3xl ${
                                              activeTab === tab
                                                ? 'bg-red-100 text-black font-semibold'
                                                : 'hover:bg-red-100 text-gray-400'
                                            }`}
                                            onClick={() => setActiveTab(tab)}
                                          >
                                            {tab}
                                          </div>
                                        ))}
                                      </div>

                                      {/* Main content on the right */}
                                      <div className='w-3/4 p-4'>
                                        {activeTab === tabs[0] && (
                                          <div>
                                            <div className='flex justify-between'>
                                              <div className='text-3xl text-[#9E2A31]'>
                                                SCV Goods Carrier
                                              </div>
                                              <div className='ml-auto'>
                                                <a
                                                  href='/allvehicles'
                                                  className='relative inline-flex items-center px-8 py-2 overflow-hidden text-base font-medium text-[#9E2A31] border-2 border-[#9E2A31] rounded-full hover:text-white group hover:bg-gray-50'
                                                >
                                                  <span className='absolute left-0 block w-full h-0 transition-all bg-[#9E2A31] group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
                                                  <span className='absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
                                                    <svg
                                                      className='w-4 h-4'
                                                      fill='none'
                                                      stroke='currentColor'
                                                      viewBox='0 0 24 24'
                                                      xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                      <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                                                      ></path>
                                                    </svg>
                                                  </span>
                                                  <span className='relative'>
                                                    View All
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                            <div className='grid grid-cols-4 gap-4 py-6'>
                                              {category.featured.map((item) => (
                                                <div
                                                  key={item.name}
                                                  className='group relative text-base sm:text-sm hover:bg-gradient-to-tr from-white via-stone-200 to-white p-2 rounded-lg'
                                                >
                                                  <div className='aspect-w-1 aspect-h-1 rounded-lg p-3 overflow-hidden group-hover:scale-110'>
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      className='object-center object-cover mx-auto'
                                                    />
                                                  </div>
                                                  <Link
                                                    to={item.href}
                                                    className='mt-6 text-center block font-medium text-gray-900'
                                                  >
                                                    <span
                                                      className='absolute z-10 inset-0'
                                                      aria-hidden='true'
                                                    />
                                                    {item.name}
                                                  </Link>
                                                  <p
                                                    aria-hidden='true'
                                                    className='mt-1 text-center text-gray-900'
                                                  >
                                                    <span>
                                                      <b>{item.price}</b>
                                                    </span>
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        )}

                                        {activeTab === tabs[1] && (
                                          <div>
                                            <div className='flex justify-between'>
                                              <div className='text-3xl text-[#9E2A31]'>
                                                LCV Goods Carrier
                                              </div>
                                              <div className='ml-auto'>
                                                <a
                                                  href='#_'
                                                  className='relative inline-flex items-center px-8 py-2 overflow-hidden text-base font-medium text-[#9E2A31] border-2 border-[#9E2A31] rounded-full hover:text-white group hover:bg-gray-50'
                                                >
                                                  <span className='absolute left-0 block w-full h-0 transition-all bg-[#9E2A31] group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
                                                  <span className='absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
                                                    <svg
                                                      className='w-4 h-4'
                                                      fill='none'
                                                      stroke='currentColor'
                                                      viewBox='0 0 24 24'
                                                      xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                      <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                                                      ></path>
                                                    </svg>
                                                  </span>
                                                  <span className='relative'>
                                                    View All
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                            <div className='grid grid-cols-4 gap-4 py-6'>
                                              {category.featured2.map(
                                                (item) => (
                                                  <div
                                                    key={item.name}
                                                    className='group relative text-base sm:text-sm hover:bg-gradient-to-tr from-white via-stone-200 to-white p-2 rounded-lg'
                                                  >
                                                    <div className='aspect-w-1 aspect-h-1 rounded-lg p-3 overflow-hidden group-hover:scale-110'>
                                                      <img
                                                        src={item.imageSrc}
                                                        alt={item.imageAlt}
                                                        className='object-center object-cover mx-auto'
                                                      />
                                                    </div>
                                                    <Link
                                                      to={item.href}
                                                      className='mt-6 text-center block font-medium text-gray-900'
                                                    >
                                                      <span
                                                        className='absolute z-10 inset-0'
                                                        aria-hidden='true'
                                                      />
                                                      {item.name}
                                                    </Link>
                                                    <p
                                                      aria-hidden='true'
                                                      className='mt-1 text-center text-gray-900'
                                                    >
                                                      <span>
                                                        <b>{item.price}</b>
                                                      </span>
                                                    </p>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        )}

                                        {activeTab === tabs[2] && (
                                          <div>
                                            <div className='flex justify-between'>
                                              <div className='text-3xl text-[#9E2A31]'>
                                                LCV Passenger
                                              </div>
                                              <div className='ml-auto'>
                                                <a
                                                  href='#_'
                                                  className='relative inline-flex items-center px-8 py-2 overflow-hidden text-base font-medium text-[#9E2A31] border-2 border-[#9E2A31] rounded-full hover:text-white group hover:bg-gray-50'
                                                >
                                                  <span className='absolute left-0 block w-full h-0 transition-all bg-[#9E2A31] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
                                                  <span className='absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
                                                    <svg
                                                      className='w-4 h-4'
                                                      fill='none'
                                                      stroke='currentColor'
                                                      viewBox='0 0 24 24'
                                                      xmlns='http://www.w3.org/2000/svg'
                                                    >
                                                      <path
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        stroke-width='2'
                                                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                                                      ></path>
                                                    </svg>
                                                  </span>
                                                  <span className='relative'>
                                                    View All
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                            <div className='grid grid-cols-4 gap-4 py-6'>
                                              {category.featured3.map(
                                                (item) => (
                                                  <div
                                                    key={item.name}
                                                    className='group relative text-base sm:text-sm hover:bg-gradient-to-tr from-white via-stone-200 to-white p-2 rounded-lg'
                                                  >
                                                    <div className='aspect-w-1 aspect-h-1 rounded-lg p-3 overflow-hidden group-hover:scale-110'>
                                                      <img
                                                        src={item.imageSrc}
                                                        alt={item.imageAlt}
                                                        className='object-center object-cover mx-auto'
                                                      />
                                                    </div>
                                                    <Link
                                                      to={item.href}
                                                      className='mt-6 text-center block font-medium text-gray-900'
                                                    >
                                                      <span
                                                        className='absolute z-10 inset-0'
                                                        aria-hidden='true'
                                                      />
                                                      {item.name}
                                                    </Link>
                                                    <p
                                                      aria-hidden='true'
                                                      className='mt-1 text-center text-gray-900'
                                                    >
                                                      <span>
                                                        <b>{item.price}</b>
                                                      </span>
                                                    </p>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}
                    <Link
                      key='About'
                      to='/about'
                      className='flex items-center text-sm font-medium hover:text-red-400'
                    >
                      About Us
                    </Link>
                    <Popover className='relative'>
                      {/* Solutions section */}
                      <Popover.Button className='flex items-center text-sm font-medium mt-5 text-black-200 hover:text-red-400'>
                        Services
                        <ChevronDownIcon className='h-4 w-4 ml-1' />
                      </Popover.Button>
                      <Transition
                        as={React.Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Popover.Panel className='absolute z-10 -ml-12 mt-3 transform max-w-sm lg:max-w-md'>
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='relative grid gap-6 bg-white p-6'>
                              <Link
                                to='/finance'
                                className='block text-sm font-medium text-gray-900 hover:text-[#9E2A31]'
                              >
                                Finance
                              </Link>
                              <Link
                                to='/insurance'
                                className='block text-sm font-medium text-gray-900 hover:text-[#9E2A31]'
                              >
                                Insurance
                              </Link>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      {/* Solutions section */}
                      <Popover.Button className='flex items-center text-sm font-medium mt-5 text-black-200 hover:text-red-400'>
                        Outlets
                        <ChevronDownIcon className='h-4 w-4 ml-1' />
                      </Popover.Button>
                      <Transition
                        as={React.Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Popover.Panel className='absolute z-10 -ml-12 mt-3 transform max-w-sm lg:max-w-md'>
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='relative grid gap-6  bg-white p-6'>
                              <Link
                                to='/outlet'
                                className='block text-sm font-medium text-gray-900 hover:text-[#9E2A31]'
                              >
                                Showrooms
                              </Link>
                              <Link
                                to='/insurance'
                                className='block text-sm font-medium text-gray-900 hover:text-[#9E2A31]'
                              >
                                Service Center
                              </Link>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Link
                      to='/contact'
                      className='flex items-center text-sm font-medium hover:text-red-400'
                    >
                      Contact
                    </Link>
                  </div>
                </Popover.Group>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default MainHeader;
