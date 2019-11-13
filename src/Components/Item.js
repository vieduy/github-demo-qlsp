import React, { Component } from 'react';

class Item extends Component {
    render(){
      const item = this.props;
      return (
            <tr>
                <td className="text-center">{item.stt+1}</td>
                <td>{item.TenSp}</td>
                <td>{item.MoTa}</td>
                <td>{item.Gia}</td>
                <td>{item.NgaySx}</td>
                <td>{item.HanSd}</td>
                <td>
                    <button onClick={() => item.editSP(item)} type="button" className="btn btn-warning">Edit</button>
                    <button style={{marginLeft: '5px'}} onClick={() => { if (window.confirm('Bạn có muốn xóa sản phẩm này?')) item.delSP(item) } } type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
      );
    }
  }
  
  export default Item;