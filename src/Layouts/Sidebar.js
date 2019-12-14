import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
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
              </nav>
          </div>    
          {children}        
        </div>
      );
    }
  }
  
  export default Sidebar;