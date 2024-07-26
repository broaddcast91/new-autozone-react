import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs/ContactUs';
import About from './pages/About/About';
import BadaDosti2 from './pages/Vehicles/BadaDosti2';
import Outlets from './pages/Outlets/Outlets';
import Finance from './pages/Finance/Finance';
import Insurance from './pages/Insurance/Insurance';
import DostPlusCNG from './pages/Vehicles/DostPlusCNG';
import DostLiTE from './pages/Vehicles/DostLiTE';
import BadaDosti4 from './pages/Vehicles/BadaDosti4';
import DostCNG from './pages/Vehicles/DostCNG';
import BadaDostCNG from './pages/Vehicles/BadaDostCNG';
import DostStrong from './pages/Vehicles/DostStrong';
import DostPlus from './pages/Vehicles/DostPlus';
import AllVehicles from './pages/Vehicles/AllVehicles';
import DostXL from './pages/Vehicles/DostXL';
import BadaDosti4LNT from './pages/Vehicles/BadaDosti4LNT';
import BadaDosti3PlusLNT from './pages/Vehicles/BadaDosti3PlusLNT';
import BadaDosti3Plus from './pages/Vehicles/BadaDosti3Plus';
import DefaultScrolltoTop from './components/DefaultScrolltoTop';
import BookAService from './pages/BookAService';
import StaffBus from './pages/Vehicles/StaffBus';
import SchoolBus from './pages/Vehicles/SchoolBus';
import PartnerTruck from './pages/Vehicles/PartnerTruck';
import Thankyou from './pages/Thankyou';

function App() {
  return (
    <>
      <Popup />
      <ScrollToTop />
      <BrowserRouter>
        <DefaultScrolltoTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/about' element={<About />} />
            <Route path='/bada-dost-i2' element={<BadaDosti2 />} />
            <Route path='/dost-plus' element={<DostPlus />} />
            <Route path='/dost-plus-cng' element={<DostPlusCNG />} />
            <Route path='/dost-strong' element={<DostStrong />} />
            <Route path='/bada-dost-cng' element={<BadaDostCNG />} />
            <Route path='/dost-cng' element={<DostCNG />} />
            <Route path='/bada-dost-i4' element={<BadaDosti4 />} />
            <Route path='/dost-lite' element={<DostLiTE />} />
            <Route path='/dost-xl' element={<DostXL />} />
            <Route path='/bada-dost-i4-lnt' element={<BadaDosti4LNT />} />
            <Route
              path='/bada-dost-i3-plus-lnt'
              element={<BadaDosti3PlusLNT />}
            />
            <Route path='/bada-dost-i3-plus' element={<BadaDosti3Plus />} />
            <Route path='/partner-truck' element={<PartnerTruck />} />
            <Route path='/school-bus' element={<SchoolBus />} />
            <Route path='/staff-bus' element={<StaffBus />} />
            <Route path='/allvehicles' element={<AllVehicles />} />
            <Route path='/outlet' element={<Outlets />} />
            <Route path='/finance' element={<Finance />} />
            <Route path='/insurance' element={<Insurance />} />
            <Route path='/book-a-service' element={<BookAService />} />
            <Route path='/thankyou' element={<Thankyou />} />
          </Routes>
        </DefaultScrolltoTop>
      </BrowserRouter>
    </>
  );
}

export const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Show the popup when the component mounts
    setPopupVisible(true);
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., submit to backend or store locally
    console.log('Phone Number submitted:', phoneNumber);
    // For demo, clear the input after submission
    setPhoneNumber('');
    // Close the popup after submission (remove/comment if not needed)
    setPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg text-center max-w-md'>
            <h2 className='text-2xl font-bold mb-4'>Subscribe to Updates</h2>
            <p className='text-gray-600 mb-6'>
              Enter your phone number to receive updates.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <input
                  type='tel'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder='Enter your phone number'
                  className='px-4 py-2 border border-gray-300 rounded-3xl w-full focus:outline-none focus:border-[#9E2A31]'
                  required
                />
              </div>
              <button
                type='submit'
                className='bg-[#9E2A31] text-white px-4 py-2 rounded-3xl hover:bg-red-700 transition duration-300 mr-2'
              >
                Submit
              </button>
              <button
                type='button'
                onClick={handleClosePopup}
                className='text-gray-600 px-4 py-2 rounded-3xl hover:text-red-600 focus:outline-none'
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
