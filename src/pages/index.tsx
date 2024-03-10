import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './Landing/Landing';
import Home from './Home';
import HomeViewAll from './HomeViewAll';
import HomeMaterialDetail from './HomeMaterialDetail';
import Preview from './Preview';
import Cart from './Cart';
import MaterialBox from './MaterialBox';
import Signin from './Signin';
import Callback from './Callback';
import Signup from './Signup';
import Upload from './Upload';
import MyMain from './My/MyMain';
import BuyNow from './BuyNow';
import RemittanceAdvice from './RemittanceAdvice';
import { UploadDefaultIcon } from '../assets/icons';
import UploadDefaultStep from './Upload/UploadDefaultStep';
import UploadInProgresStep from './Upload/UploadInProgressStep';
import UploadGuidelineStep from './Upload/UploadGuidelineStep';
import UploadRoutes from './index.types';
import UploadCautionStep from './Upload/UploadCautionStep';
import UploadCollectPhoneNumberStep from './Upload/UploadCollectPhoneNumberStep';
import MyViewMore from './My/MyViewMore';
import DeleteAccount from './My/DeleteAccount';
import Bookmarks from './My/Bookmarks';
import Likes from './My/Likes';
import Transactions from './My/Transactions';
import RootContainer from './RootContainer';
import NoticeList from './My/NoticeList';
import NoticeDetail, { NoticeDetailById } from './My/NoticeDetail';
import EventList from './My/EventList';
import { EventDetailById } from './My/EventDetail';
import ContactUs from './My/ContactUs';
import FAQList from './My/FAQList';
import UploadGuideline from './My/UploadGuideline';
import Caution from './My/Caution';
import My from './My';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootContainer />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/landing',
          element: <Landing />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/home-all/:category/:tag',
          element: <HomeViewAll />,
        },
        {
          path: '/assignment/:materialId/detail',
          element: <HomeMaterialDetail />,
        },
        {
          path: '/assignment/:materialId/preview',
          element: <Preview />,
        },
        {
          path: '/buy-now/:materialId',
          element: <BuyNow />,
        },
        {
          path: '/RemittanceAdvice/:buyInfoId',
          element: <RemittanceAdvice />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/material-box',
          element: <MaterialBox />,
        },
        {
          path: '/signin',
          element: <Signin />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
        {
          path: '/callback',
          element: <Callback />,
        },
        {
          path: '/upload',
          element: <Upload />,
          children: [
            {
              index: true,
              element: <UploadDefaultStep />,
            },
            {
              path: UploadRoutes.InProgress,
              element: <UploadInProgresStep />,
            },
            {
              path: UploadRoutes.Guideline,
              element: <UploadGuidelineStep />,
            },
            {
              path: UploadRoutes.Caution,
              element: <UploadCautionStep />,
            },
            {
              path: UploadRoutes.PhoneNumber,
              element: <UploadCollectPhoneNumberStep />,
            },
          ],
        },
        {
          path: 'my',
          element: <My />,
          children: [
            { index: true, element: <MyMain /> },
            { path: 'view-more', element: <MyViewMore /> },
            { path: 'delete-account', element: <DeleteAccount /> },
            { path: 'bookmarks', element: <Bookmarks /> },
            { path: 'likes', element: <Likes /> },
            { path: 'transactions', element: <Transactions /> },
            { path: 'notice-list', element: <NoticeList /> },
            { path: 'notice-detail/:noticeId', element: <NoticeDetailById /> },
            { path: 'event-list', element: <EventList /> },
            { path: 'event-detail/:eventId', element: <EventDetailById /> },
            {
              path: 'contact-us',
              element: <ContactUs />,
            },
            {
              path: 'FAQ',
              element: <FAQList />,
            },
            {
              path: 'upload-guideline',
              children: [
                {
                  index: true,
                  element: <UploadGuideline />,
                },
                {
                  path: 'caution',
                  element: <Caution />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
