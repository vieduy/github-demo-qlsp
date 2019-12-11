import React from 'react';
import Homepage from "./Pages/Homepage/Homepage";
import NotFoundpage from "./Pages/NotFoundpage/NotFoundpage";
import Accountpage from "./Pages/Accountpage/Accountpage";
import Productpage from './Pages/Productpage/Productpage';
import Login from './Pages/Loginpage/Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Homepage/> 
    },

    {
        path: '/account',
        exact: false,
        main: () => <Accountpage/> 
    },

    {
        path: '/product',
        exact: false,
        main: () => <Productpage/>
    },

    {
        path: '/login',
        exact: false,
        main: () => <Login/>
    },

    {
        path: '',
        exact: false,
        main: () => <NotFoundpage/> 
    }
];

export default routes;