import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
// import SearchHeader from './components/Header/SearchHeader';
import FindAccountPage from './pages/FindAccount/FindAccountPage';
import Login from './pages/Login';
import NoticeBoard from './pages/NoticeBoard';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <section className='w-[1280px] h-screen flex flex-col m-auto'>
        <Header />
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<NoticeBoard />} />
            <Route path='/board/all' element={<NoticeBoard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/findAccount' element={<FindAccountPage />} />
          </Routes>
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
