import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './Routes';
import  RouteWithLayout from './Components/RouteWithLayout/RouteWithLayout';
import Sidebar from './Components/Sidebar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <Router > 
              <Switch>
                {/* {RoutesPrivate.map((route, index) => {
                  return <RouteWithLayout component={route.main} exact={route.exact} path={route.path} key={index} layout={Sidebar}/>  
                })}
                {Routes.map((route, index) => {
                  return <Route path={route.path} component={route.main} exact={route.exact} key={index}/>
                })} */}
                <Routes/>
              </Switch>
      </Router>
    );
  }
}

export default App;
