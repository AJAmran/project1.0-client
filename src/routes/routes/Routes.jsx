import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from '../../pages/login/Login';
import Main from '../../layout/Main';
import Registration from '../../pages/registration/Registration';
import Home from '../../pages/home/home';
import Blog from '../../pages/blog/Blog';
import Recipes from '../../pages/recipes/Recipes';
import NotFound from '../../pages/notFound/NotFound';
import PrivateRout from '../privateRoute/PrivateRout';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound></NotFound>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () =>fetch(`https://cooks-cantina-server-ajamran.vercel.app/alldata`),
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
        },
        {
          path:'/recipe/:id',
          element:<PrivateRout><Recipes></Recipes></PrivateRout>,
          loader: () =>fetch(`https://cooks-cantina-server-ajamran.vercel.app/alldata`),
        }
      ]
    },
    
  ]);
  

export default router;