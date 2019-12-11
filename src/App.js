import React, { Component, Fragment } from 'react';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <Router>
        <Fragment>
          <div className="App">
            <Sidebar/>    
            <div id="board">
              <Switch>
                {Routes.map((route, index) => {
                  return <Route path={route.path} component={route.main} exact={route.exact} key={index}/>
                })}
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
