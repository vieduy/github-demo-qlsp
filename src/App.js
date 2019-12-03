import React, { Component } from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import List from './Components/List';
import Sidebar from './Components/Sidebar';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  // onShow(){
  //   this.setState({
  //       showForm: !this.state.showForm,
  //       itemSelected: null
  //   });
  // } 
  // addSP(sanpham){
  //   if (sanpham._id === ''){ 
  //     axios({
  //       method: 'post',
  //       url: 'http://ttcong2301.southeastasia.cloudapp.azure.com:3000/product',
  //       data: {
  //         tensp: sanpham.tensp,
  //         mota: sanpham.mota,
  //         gia: sanpham.gia,
  //         ngaysx: sanpham.ngaysx,
  //         hansd: sanpham.hansd
  //       }
  //     })
  //     .then( response => {
  //       if (response.status === 200){
  //         this.getSP();
  //       }
  //     });      
  //   }
  //   else {
  //     axios({
  //       method: 'patch',
  //       url: 'http://ttcong2301.southeastasia.cloudapp.azure.com:3000/product/' + sanpham._id,
  //       data: {
  //         _id: sanpham._id,
  //         tensp: sanpham.tensp,
  //         mota: sanpham.mota,
  //         gia: sanpham.gia,
  //         ngaysx: sanpham.ngaysx,
  //         hansd: sanpham.hansd
  //       }
  //     })
  //     .then( response => {
  //       if (response.status === 200){
  //         this.getSP();
  //         } 
  //       });    
  //   }
  //   this.setState({
  //     showForm: false,
  //   });
  // }

  // editSP(sanpham){
  //   this.setState({
  //     showForm: true,
  //     itemSelected: sanpham
  //   });
  // }

  // onLogin(newAcc){
  //   console.log(newAcc);
  // }

  render(){
    return (
      <div className="App">
        <Sidebar/>  
        <div id="board">
            {/* TITLE : START */}
            <Title onLogin={this.onLogin}/>
            <hr/>
            <Form />
            {/* FORM : END */}
            {/* LIST : START */}
            <br/>
            <List editSP={this.editSP} />
        </div>
      </div>
    );
  }
}

export default App;
