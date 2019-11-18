import React, { Component } from 'react';

class Item extends Component {
    render(){
      const item = this.props;
      return (
            <tr>
                <td className="text-center">{item.stt+1}</td>
                <td>{item.tensp}</td>
                <td>{item.mota}</td>
                <td>{item.gia}</td>
                <td>{item.ngaysx}</td>
                <td>{item.hansd}</td>
                <td>
                    <button onClick={() => item.editSP(item)} type="button" className="btn btn-warning">Edit</button>
                    <button style={{marginLeft: '5px'}} onClick={() => { if (window.confirm('Bạn có muốn xóa sản phẩm này?')) item.delSP(item) } } type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
      );
    }
  }
  
  export default Item;