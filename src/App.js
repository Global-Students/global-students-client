import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import NoticeBoard from './pages/NoticeBoard';
import Login from './pages/Login';
import Footer from './components/Footer';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/NoticeBoard/All' element={<NoticeBoard />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/MyPage' element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
