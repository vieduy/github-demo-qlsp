import React, {Component} from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// const fakeAuth = {
//   isAuthenticated: true,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

// export const PrivateRoute = ({layout: Layout ,component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     fakeAuth.isAuthenticated === true
//       ? <Layout>
//           <div id="board">
//             <Component {...props} />
//           </div>
//         </Layout>
//       : <Redirect to='/login' />
//   )} />
// )

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
          isAuthenticated={true}  
          component={matchProps => (  
            <Layout>
              <div id="board">
                <Component {...matchProps} />
              </div>
            </Layout>
          )}
        />
      </Switch>
    );
  }
}

export default RouteWithLayout;
