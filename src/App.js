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
  }
  
  componentDidMount(){
    axios.get('http://localhost:3000/product')
    .then( response => {
      this.setState({mangSanPham: response.data})
    });
  }

  onShow(){
    this.setState({
        showForm: !this.state.showForm,
        itemSelected: null
    });
  } 
  addSP(sanpham){
    if (sanpham._id === ''){ 
        // this.state.mangSanPham.push({
        //   id: uuidv4(),
        //   TenSP: sanpham.TenSP,
        //   MoTa: sanpham.MoTa,
        //   Gia: sanpham.Gia,
        //   NgaySx: sanpham.NgaySx,
        //   HanSd: sanpham.HanSd,
        // });
      axios({
        method: 'post',
        url: 'http://localhost:3000/product',
        data: {
          TenSp: sanpham.TenSp,
          MoTa: sanpham.MoTa,
          Gia: sanpham.Gia,
          NgaySx: sanpham.NgaySx,
          HanSd: sanpham.HanSd
        }
      });      
    }
    else {
      // this.setState({
      //       mangSanPham: this.state.mangSanPham.map( element => {  
      //           if (element.id === sanpham.id){
      //              element.TenSP = sanpham.TenSP;
      //              element.MoTa = sanpham.MoTa;
      //              element.Gia = sanpham.Gia;
      //              element.NgaySx = sanpham.NgaySx;
      //              element.HanSd = sanpham.HanSd;
      //           }
      //           return element;
      //     }),
      // });
      axios({
        method: 'patch',
        url: 'http://localhost:3000/product/' + sanpham._id,
        data: {
          _id: sanpham._id,
          TenSp: sanpham.TenSp,
          MoTa: sanpham.MoTa,
          Gia: sanpham.Gia,
          NgaySx: sanpham.NgaySx,
          HanSd: sanpham.HanSd
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
        url: 'http://localhost:3000/product/' + sanpham._id,
        data: {
        }
      });        
    // remove(this.state.mangSanPham, (item)=>{
    //   return item.id === sanpham.id;
    // });
    // this.setState({
    //   mangSanPham: this.state.mangSanPham
    // });
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
