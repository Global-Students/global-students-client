import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import FindAccountPage from './pages/FindAccount/FindAccountPage';
import Login from './pages/Login';
import NoticeBoard from './pages/NoticeBoard';
import SignUp from './pages/SignUp';
import UpdateInfo from './pages/Update/UpdateInfo';
import UpdateProfile from './pages/Update/UpdateProfile';

function App() {
  return (
    <BrowserRouter>
      <section className='w-[1280px] h-screen flex flex-col m-auto'>
        <Header />
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<NoticeBoard />} />
            <Route path='/noticeBoard/all' element={<NoticeBoard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/findAccount' element={<FindAccountPage />} />
            <Route path='/updateInfo'element={<UpdateInfo />} />
            <Route path='/updateProfile' element={<UpdateProfile />} />
          </Routes>
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
