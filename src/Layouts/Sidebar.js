import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../Actions/index';
class Sidebar extends Component {
  logOut = () => {
    localStorage.removeItem("accessToken");
    this.props.isntAuthenticated();
  }
    render(){
      const { children } = this.props;
      return (
        <div>
          <div id="sidebar">
              <h1 className="font-weight-lighter">Chức năng</h1>
              <br/> <br/> <br/> <br/>
              <nav className="nav flex-column nav-pills">
                  <NavLink activeClassName="active" to="/team" className="nav-link">Đội Hình</NavLink>
                  <NavLink activeClassName="active" to="/account" className="nav-link">Tài Khoản</NavLink>
                  <NavLink activeClassName="active" to="/product" className="nav-link">Sản Phẩm</NavLink>
                  <NavLink activeClassName="active" to="/bill" className="nav-link">Hoá Đơn</NavLink>
                  <NavLink activeClassName="active" to="/feedback" className={`nav-link ${this.activeClassName}`}>Hòm Thư</NavLink>
                  <br/>
                  <br/>
                  <NavLink onClick={() => {if (window.confirm('Bạn có muốn đăng xuất?')) this.logOut()}} activeClassName="active" to="/login" className="nav-link">Đăng Xuất</NavLink>
              </nav>
          </div>    
          {children}        
        </div>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      isntAuthenticated: () => {
        dispatch(actions.isntAuthenticated())
      }
    }
  }

  export default connect(null, mapDispatchToProps)(Sidebar);