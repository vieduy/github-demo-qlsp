import React, { Component } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  render(){
    return (
      <Router> 
        <Switch>
          <Routes/>
        </Switch>
      </Router>
    );
  }
}

export default App;
