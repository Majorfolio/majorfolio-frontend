import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './Landing/Landing';
import Home from './Home';
import HomeViewAll from './HomeViewAll';
import HomeMaterialDetail from './HomeMaterialDetail';
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

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
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
          children: [
            { index: true, element: <MyMain /> },
            { path: 'view-more', element: <MyViewMore /> },
            { path: 'signout', element: <span /> },
            { path: 'delete-account', element: <span /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
