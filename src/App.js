import React, { Component } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import List from './Components/List';
import Sidebar from './Components/Sidebar';
// import {remove} from 'lodash';


// const uuidv4 = require('uuid/v4');
const axios = require('axios');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mangSanPham : [],
      showForm: false,
      itemSelected: null
    };
    this.onShow = this.onShow.bind(this);
    this.addSP = this.addSP.bind(this);
    this.delSP = this.delSP.bind(this);
    this.editSP = this.editSP.bind(this);
    this.getSP = this.getSP.bind(this);
  }
  
  getSP(){
    axios.get('http://ttcong2301.southeastasia.cloudapp.azure.com:3000/product')
    .then( response => {
      this.setState({mangSanPham: response.data})
    });
  }

  componentDidMount(){
    this.getSP();
  }

  onShow(){
    this.setState({
        showForm: !this.state.showForm,
        itemSelected: null
    });
  } 
  addSP(sanpham){
    if (sanpham._id === ''){ 
      axios({
        method: 'post',
        url: 'http://ttcong2301.southeastasia.cloudapp.azure.com:3000/product',
        data: {
          tensp: sanpham.tensp,
          mota: sanpham.mota,
          gia: sanpham.gia,
          ngaysx: sanpham.ngaysx,
          hansd: sanpham.hansd
        }
      })
      .then( response => {
        if (response.status === 200){
          this.getSP();
        }
      });      
    }
    else {
      axios({
        method: 'patch',
        url: 'http://ttcong2301.southeastasia.cloudapp.azure.com:3000/product/' + sanpham._id,
        data: {
          _id: sanpham._id,
          tensp: sanpham.tensp,
          mota: sanpham.mota,
          gia: sanpham.gia,
          ngaysx: sanpham.ngaysx,
          hansd: sanpham.hansd
        }
      })
      .then( response => {
        if (response.status === 200){
          this.getSP();
          } 
        });    
    }
    this.setState({
      showForm: false,
    });
  }

  delSP(sanpham){
      axios({
        method: 'delete',
        url: 'http://ttcong2301.southeastasia.cloudapp.azure.com:3000/product/' + sanpham._id,
        data: {
        }
      })
      .then(response => {
        if (response.status === 200){
          this.getSP();
        }
      });     
  }

  editSP(sanpham){
    this.setState({
      showForm: true,
      itemSelected: sanpham
    });
  }

  onLogin(newAcc){
    console.log(newAcc);
  }

  render(){
    let {showForm} = this.state;
    let {mangSanPham} = this.state;
    let {itemSelected} = this.state;
    return (
      <div className="App">
        <Sidebar/>  
        <div id="board">
            {/* TITLE : START */}
            <Title onLogin={this.onLogin}/>
            <hr/>
            <Form addSP={this.addSP} onShow={this.onShow} showForm={showForm} itemSelected={itemSelected}/>
            {/* FORM : END */}
            {/* LIST : START */}
            <br/>
            <List mangSanPham={mangSanPham} delSP={this.delSP} editSP={this.editSP} />
        </div>
      </div>
    );
  }
}

export default App;
