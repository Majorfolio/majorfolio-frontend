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
          path: "/home-all/:category/:tag",
          element: <HomeViewAll />,
        },
        {
          path: "/assignment/:materialId/detail",        
          element: <HomeMaterialDetail />,
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
