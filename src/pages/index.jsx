import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./Landing/Landing"
import Home from './Home';
import HomeViewAll from './HomeViewAll';
import HomeMaterialDetail from "./HomeMaterialDetail";
import Cart from './Cart';
import MaterialBox from './MaterialBox';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true
        },
        {
          path: "/landing",
          element: <Landing />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/home-all",
          element: <HomeViewAll />,
        },     
        {
          path: "/home/detail",
          element: <HomeMaterialDetail />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/material-box",
          element: <MaterialBox />,
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router