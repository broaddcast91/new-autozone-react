import './App.css';
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

function App() {
  return (
    <>
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/bada-dost-i2' element={<BadaDosti2 />} />
          <Route path='/dost-plus' element={<DostPlus />} />
          <Route path='/dost-strong' element={<DostStrong />} />
          <Route path='/bada-dost-cng' element={<BadaDostCNG />} />
          <Route path='/dost-cng' element={<DostCNG />} />
          <Route path='/bada-dost-i4' element={<BadaDosti4 />} />
          <Route path='/dost-lite' element={<DostLiTE />} />
          <Route path='/dost-xl' element={<DostXL />} />
          <Route path='/bada-dost-i4-lnt' element={<BadaDosti4LNT />} />
          <Route path='/bada-dost-i3-plus-lnt' element={<BadaDosti3PlusLNT />} />
          <Route path='/bada-dost-i3-plus' element={<BadaDosti3Plus />} />
          <Route path='/allvehicles' element={<AllVehicles />} />
          <Route path='/outlet' element={<Outlets />} />
          <Route path='/finance' element={<Finance />} />
          <Route path='/insurance' element={<Insurance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
