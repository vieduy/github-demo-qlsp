import React, {Component} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import RouteWithLayout from './Components/RouteWithLayout/RouteWithLayout'
import Homepage from "./Pages/Homepage/Homepage";
import NotFoundpage from "./Pages/NotFoundpage/NotFoundpage";
import Accountpage from "./Pages/Accountpage/Accountpage";
import Productpage from './Pages/Productpage/Productpage';
import Login from './Pages/Loginpage/Login';
import Sidebar from './Layouts/Sidebar';

// export const routesPrivate = [
//     {
//         path: '/account',
//         exact: true,
//         main: () => <Accountpage/>,
//         layout: <Sidebar/>
//     },

//     {
//         path: '/product',
//         exact: true,
//         main: () => <Productpage/>,
//         layout: <Sidebar/>
//     }
// ];

// export const routes = [
//     {
//         path: '/login',
//         exact: true,
//         main: () => <Login/>
//     },

//     {
//         path: '',
//         exact: true,
//         main: () => <NotFoundpage/> 
//     }
// ];


class Routes extends Component {
    render() {
      return (
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          {/* <RouteWithLayout component={DashboardView} exact layout={MainLayout} path="/dashboard" /> */}
          <RouteWithLayout component={Accountpage} exact layout={Sidebar} path="/account" />
          <RouteWithLayout component={Productpage} exact layout={Sidebar} path="/product" />
          <Route path="/login" exact component={Login} />
          {/* <RouteWithLayout component={NotFoundView} exact layout={MinimalLayout} path="/not-found" /> */}
          <Redirect to="/not-found" />
        </Switch>
      );
    }
  }
  
  export default Routes;