import React, { Component } from 'react';

class Login extends Component {
  render(){
    return (
    <div className="limiter">
        <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
          <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
            <form className="login100-form validate-form flex-sb flex-w">
              <span className="login100-form-title p-b-53">
                Login
              </span>
              <div className="p-t-31 p-b-9">
                <span className="txt1">
                  Username
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Username is required">
                <input className="input100" type="text" name="username" />
                <span className="focus-input100" />
              </div>
              <div className="p-t-13 p-b-9">
                <span className="txt1">
                  Password
                </span>
                <a href="#/" className="txt2 bo1 m-l-5">
                  Forgot?
                </a>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" />
                <span className="focus-input100" />
              </div>
              <div className="container-login100-form-btn m-t-17">
                <button className="login100-form-btn">
                  Sign In
                </button>
              </div>
              <div className="w-full text-center p-t-55">
                <span className="txt2">
                  From WDS
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;