import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./Landing/Landing"
import HomeMaterialDetail from "./HomeMaterialDetail";
import Cart from './Cart';

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
          path: "/home/detail",
          element: <HomeMaterialDetail />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router