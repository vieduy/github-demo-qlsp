import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    render(){
      const {delSP} = this.props;
      const {editSP} = this.props;
      const msp = Array.from(this.props.mangSanPham);
      return (
        <div className="List">
            <div className="card">
                <div className="card-header">Danh sách sản phẩm</div>
                <table className="table table-hover ">
                <thead>
                    <tr>
                    <th style={{width: '10%'}} className="text-center">STT</th>
                    <th style={{width: '15%'}}>Tên</th>
                    <th style={{width: '25%'}}>Mô tả</th>
                    <th style={{width: '10%'}}>Giá</th>
                    <th style={{width: '13%'}}>Ngày sản xuất</th>
                    <th style={{width: '12%'}}>Hạn sử dụng</th>
                    <th style={{width: '15%'}}>Tinh chỉnh</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      msp.map((sanpham, index) => {
                        return (
                          <Item editSP={editSP} stt={index} key={index} _id={sanpham._id} tensp={sanpham.tensp} mota={sanpham.mota} gia={sanpham.gia} ngaysx={sanpham.ngaysx} hansd={sanpham.hansd} delSP={delSP}/>
                        );
                      })
                    }
                </tbody>
                </table>
          </div>  
        </div>
      );
    }
  }
  export default List;