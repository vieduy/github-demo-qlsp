import React, { Component } from 'react';
import Login from './Login';

class Title extends Component {
    render(){
      const { onLogin } = this.props;
      return (
        <div className="Title">
            <div className="row">
              <h1 style={{textAlign: 'center', padding: '50px'}} className="col-md-6">Quản Lý Tài Khoản</h1>   
              <Login className="col-md-6" onLogin={onLogin} />         
            </div>
        </div>
      );
    }
  }
  
  export default Title;