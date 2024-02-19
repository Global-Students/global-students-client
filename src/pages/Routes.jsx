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
import PostCreate from './Post/PostCreate';
import PostUpdate from './Post/PostUpdate';
import PostView from './Post/PostView';
import ProtectedRoute from './ProtectedRoute';
import Search from './Search/Search';
import SearchListPage from './Search/SearchListPage';
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
        path: '/',
        element: <NoticeBoard />,
      },
      {
        path: '/boards/:boardId',
        element: <NoticeBoard />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/find-account',
        element: <FindAccountPage />,
      },
      {
        path: '/search',
        element: <Search />,
        children: [
          {
            path: '/search/total/:keyword',
            element: <SearchListPage />,
          },
          {
            path: '/search/total/detail/:boardId/:keyword',
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
            path: '/admin/member-list',
            element: <MemberListPage />,
          },
          {
            path: '/admin/university-approval',
            element: <UniversityApprovalPage />,
          },
        ],
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/post-view/:boardId/:postId',
        element: <PostView />,
      },
      {
        path: '/auth',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/auth/post-create',
            element: <PostCreate />,
          },
          {
            path: '/auth/post-update/:boardId/:postId',
            element: <PostUpdate />,
          },
          {
            path: '/auth/my-page',
            element: <MyPage />,
          },
          {
            path: '/auth/update-info',
            element: <UpdateInfo />,
          },
          {
            path: '/auth/update-profile',
            element: <UpdateProfile />,
          },
          {
            path: '/auth/dashboard/my-posts',
            element: <DashBoard isMyPosts />,
          },
          {
            path: '/auth/dashboard/bookmark-posts',
            element: <DashBoard />,
          },
          {
            path: '/auth/searching-friend',
            element: <SearchFriends isPublic />,
          },
          {
            path: '/auth/friend',
            element: <Friend />,
          },
        ],
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
