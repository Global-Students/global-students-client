import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminPage from './Admin/AdminPage';
import MemberListPage from './Admin/MemberListPage';
import UniversityApprovalPage from './Admin/UniversityApprovalPage';
import App from './App';
import DashBoard from './DashBoard';
import FindAccountPage from './FindAccount/FindAccountPage';
import PrivacyPolicy from './Footer/PrivacyPolicy';
import Friend from './Friend';
import Login from './Login';
import MyPage from './MyPage';
import NotFound from './NotFound';
import NoticeBoard from './NoticeBoard';
import ProtectedRoute from './ProtectedRoute';
import Search from './Search/Search';
import SearchDetailListPage from './Search/SearchDetailListPage';
import SearchFriends from './SearchFriends';
import SignUp from './SignUp/SignUp';
import UpdateInfo from './Update/UpdateInfo';
import UpdateProfile from './Update/UpdateProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/myPage',
            element: <MyPage />,
          },
          {
            path: '/updateInfo',
            element: <UpdateInfo />,
          },
          {
            path: '/updateProfile',
            element: <UpdateProfile />,
          },
          {
            path: '/dashboard/myPosts',
            element: <DashBoard isMyPosts />,
          },
          {
            path: '/dashboard/bookmarkPosts',
            element: <DashBoard />,
          },
          {
            path: '/searchingFriend',
            element: <SearchFriends isPublic />,
          },
          {
            path: '/Friend',
            element: <Friend />,
          },
        ],
      },
      {
        path: '/board/all',
        element: <NoticeBoard />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/findAccount',
        element: <FindAccountPage />,
      },
      {
        path: '/search',
        element: <Search />,
        children: [
          {
            path: '/search/:keyword/:board-name',
            element: <SearchDetailListPage />,
          },
        ],
      },
      {
        path: '/admin',
        element: <AdminPage />,
        children: [
          {
            path: '/admin',
            element: <MemberListPage />,
          },
          {
            path: '/admin/memberList',
            element: <MemberListPage />,
          },
          {
            path: '/admin/universityApproval',
            element: <UniversityApprovalPage />,
          },
        ],
      },
      {
        path: '/privacyPolicy',
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}