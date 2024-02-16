import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import AdminPage from './pages/Admin/AdminPage';
import MemberListPage from './pages/Admin/MemberListPage';
import UniversityApprovalPage from './pages/Admin/UniversityApprovalPage';
import FindAccountPage from './pages/FindAccount/FindAccountPage';
import Login from './pages/Login';
import NoticeBoard from './pages/NoticeBoard';
import UpdateInfo from './pages/Update/UpdateInfo';
import UpdateProfile from './pages/Update/UpdateProfile';
import MyPage from './pages/MyPage';
import DashBoard from './pages/DashBoard';
import SignUp from './pages/SignUp/SignUp';
import Search from './pages/Search/Search';
import SearchDetailListPage from './pages/Search/SearchDetailListPage';
import SearchFriends from './pages/SearchFriends';
import Friend from './pages/Friend';
import PostCreate from './pages/Post/PostCreate';
import PostUpdate from './pages/Post/PostUpdate';
import PostView from './pages/Post/PostView';

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
            <Route path='/myPage' element={<MyPage />} />
            <Route path='/findAccount' element={<FindAccountPage />} />
            <Route path='/updateInfo' element={<UpdateInfo />} />
            <Route path='/updateProfile' element={<UpdateProfile />} />
            <Route path='/postView' element={<PostView />} />
            <Route path='/postCreate' element={<PostCreate />} />
            <Route path='/postUpdate' element={<PostUpdate />} />
            
            <Route path='/search' element={<Search />}>
            
            
              <Route
                path='/search/:keyword/:boardName'
                element={<SearchDetailListPage />}
              />
            </Route>
            <Route
              path='/dashboard/myPosts'
              element={<DashBoard isMyPosts />}
            />
            <Route path='/dashboard/bookmarkPosts' element={<DashBoard />} />
            <Route path='/admin' element={<AdminPage />}>
              <Route index path='/admin' element={<MemberListPage />} />
              <Route path='/admin/memberList' element={<MemberListPage />} />
              <Route
                path='/admin/universityApproval'
                element={<UniversityApprovalPage />}
              />
            </Route>
            <Route
              path='/searchingFriend'
              element={<SearchFriends isPublic />}
            />
            <Route path='/Friend' element={<Friend />} />
          </Routes>
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
