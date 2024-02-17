import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import Inquiry from './Footer/Inquiry';

export default function App() {
  const [isInquiryClick, setIsInquiryClick] = useState(false);
  const handleToggle = () => {
    setIsInquiryClick((prev) => !prev);
  };

  return (
    <section className='w-[1280px] h-screen flex flex-col m-auto'>
      <Header />
      <Inquiry isInquiryClick={isInquiryClick} onClick={handleToggle} />
      <div className={`flex-1 ${isInquiryClick ? 'overflow-hidden' : ''}`}>
        <Outlet />
      </div>
      <Footer onClick={handleToggle} />
    </section>
  );
}
