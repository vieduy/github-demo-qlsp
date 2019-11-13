import React, { Component } from 'react';

class Sidebar extends Component {
    render(){
      return (
        <div id="sidebar">
            <h1 className="font-weight-lighter"> Chức năng </h1>
            <br/> <br/> <br/> <br/>
            <nav className="nav flex-column nav-pills">
                <a className="nav-link" href="#/">Hoạt Động</a>
                <a className="nav-link active" href='/product'>Quản lý Sản phẩm</a>
                <a className="nav-link" href='#/'>Đội Hình</a>
                <a className="nav-link" href="#/">Người Dùng</a>
                <a className="nav-link" href="#/">Khách Hàng</a>
                <a className="nav-link" href="#/">Hóa Đơn</a>
                <br/>
                <a className="nav-link" href="#/">Hòm Thư Góp Ý</a>
            </nav>
        </div>            
      );
    }
  }
  
  export default Sidebar;