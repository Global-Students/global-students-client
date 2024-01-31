import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import NoticeBoard from './pages/NoticeBoard';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/NoticeBoard/All' element={<NoticeBoard />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
