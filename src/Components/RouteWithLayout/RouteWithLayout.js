import React, {Component} from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const PrivateRoute = ({ component, isAuthenticated }) => {
  return (
    <Route
      render={props => {
        return isAuthenticated ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        );
      }}
    />
  );
};

class RouteWithLayout extends Component {
  render() {
    const { layout: Layout, component: Component } = this.props;
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return <Redirect to={`/login`} />;
          }}
        />
        <PrivateRoute 
          isAuthenticated={false}  
          component={matchProps => (  
            //<Layout>
              <div id="board">
                <Component {...matchProps} />
              </div>
            //</Layout>
          )}
        />
      </Switch>
    );
  }
}

export default RouteWithLayout;
