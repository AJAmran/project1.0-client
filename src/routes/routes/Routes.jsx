import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from '../../pages/login/Login';
import Main from '../../layout/Main';
import Registration from '../../pages/registration/Registration';
import Home from '../../pages/home/home';
import Blog from '../../pages/blog/Blog';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    
  ]);
  

export default router;