import React, { Component } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Routes from './Routes';

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
          <Routes/>
        </Switch>
      </Router>
    );
  }
}

export default App;
