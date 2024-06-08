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
          <Route path='/outlet' element={<Outlets />} />
          <Route path='/finance' element={<Finance />} />
          <Route path='/insurance' element={<Insurance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
