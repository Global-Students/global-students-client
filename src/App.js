import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import AdminPage from './pages/Admin/AdminPage';
import MemberListPage from './pages/Admin/MemberListPage';
import UniversityApprovalPage from './pages/Admin/UniversityApprovalPage';
import FindAccountPage from './pages/FindAccount/FindAccountPage';
import Login from './pages/Login';
import NoticeBoard from './pages/NoticeBoard';
import SignUp from './pages/SignUp/SignUp';
import PrivacyPolicy from './pages/Footer/PrivacyPolicy';
import Inquiry from './pages/Footer/Inquiry';

function App() {
  const [isInquiryClick, setIsInquiryClick] = useState(false);
  const handleToggle = () => {
    setIsInquiryClick((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <section className='w-[1280px] h-screen flex flex-col m-auto'>
        <Header />
        <Inquiry isInquiryClick={isInquiryClick} onClick={handleToggle} />
        <div className={`flex-1 ${isInquiryClick ? 'overflow-hidden' : ''}`}>
          <Routes>
            <Route path='/' element={<NoticeBoard />} />
            <Route path='/board/all' element={<NoticeBoard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/findAccount' element={<FindAccountPage />} />
            <Route path='/admin' element={<AdminPage />}>
              <Route index path='/admin' element={<MemberListPage />} />
              <Route path='/admin/memberList' element={<MemberListPage />} />
              <Route
                path='/admin/universityApproval'
                element={<UniversityApprovalPage />}
              />
            </Route>
            <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer onClick={handleToggle} />
      </section>
    </BrowserRouter>
  );
}

export default App;
