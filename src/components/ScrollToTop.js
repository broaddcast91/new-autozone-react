import React, { useState, useEffect } from 'react';
import { IoMdRocket } from 'react-icons/io';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-5 right-5'>
      {visible && (
        <IoMdRocket
          onClick={scrollToTop}
          className='h-10 w-10 text-[#FAA930]'
        />
      )}
    </div>
  );
};

export default ScrollToTop;
