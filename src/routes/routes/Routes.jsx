import React from 'react';
import Home from '../../pages/home/home';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from '../../pages/login/Login';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);
  

export default router;