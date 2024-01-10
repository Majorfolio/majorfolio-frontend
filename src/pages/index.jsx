import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./Landing/Landing"

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
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router