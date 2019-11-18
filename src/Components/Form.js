import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            sp_id: '',
            sp_ten: '',
            sp_mota: '',
            sp_gia: '',
            sp_nsx: '',
            sp_hsd: '',
            alert: null
        };    
        this.validator = new SimpleReactValidator();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.itemSelected !== null) {
            this.setState({
                sp_id: this.props.itemSelected._id,
                sp_ten: this.props.itemSelected.tensp,
                sp_gia: this.props.itemSelected.gia,
                sp_mota: this.props.itemSelected.mota,
                sp_nsx: this.props.itemSelected.ngaysx,
                sp_hsd: this.props.itemSelected.hansd
              });
          }
      }

    componentWillReceiveProps(nextProps) {
        if(nextProps.itemSelected !== null) {
          this.setState({
            sp_id: nextProps.itemSelected._id,
            sp_ten: nextProps.itemSelected.tensp,
            sp_gia: nextProps.itemSelected.gia,
            sp_mota: nextProps.itemSelected.mota,
            sp_nsx: nextProps.itemSelected.ngaysx,
            sp_hsd: nextProps.itemSelected.hansd
            });
        }
        else {
            this.setState({
                sp_id: '',
                sp_ten: '',
                sp_mota: '',
                sp_gia: '',
                sp_nsx: '',
                sp_hsd: ''
            });
        }
      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });
    }
    handleSubmit(event) {
        const newItem = this.state;
         if (this.validator.allValid()) {
            let newSP = {
                 _id: newItem.sp_id,
                 tensp: newItem.sp_ten, 
                 mota: newItem.sp_mota, 
                 gia: newItem.sp_gia, 
                 ngaysx: newItem.sp_nsx, 
                 hansd:newItem.sp_hsd
         };
            this.props.addSP(newSP);
        }
        else {
            this.validator.showMessages();
            this.forceUpdate();
            event.preventDefault();
        }
    }

    render(){
        const { sp_ten, sp_mota, sp_gia, sp_nsx, sp_hsd } = this.state;
        const {onShow} = this.props;
        let showForm = null;
        let valueForm = 'Thêm sản phẩm';
        if (this.props.showForm === true){
            valueForm = 'Hủy';
            showForm = (
            <div>
                <br/>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="ex1">Tên</label>
                                <input name="sp_ten" className="form-control" id="ex1" type="text" placeholder="Name" value={sp_ten} onChange={this.handleInputChange}  />
                                {this.validator.message('title', sp_ten, 'required')}
                            </div>
                            <div className="col-3">
                                <label htmlFor="ex2">Mô Tả</label>
                                <input name="sp_mota" value={sp_mota} onChange={this.handleInputChange} className="form-control" id="ex2" type="text" placeholder="Mô tả" require="true" />
                            </div>
                            <div className="col-1">
                                <label htmlFor="ex3">Giá</label>
                                <input name="sp_gia" value={sp_gia} onChange={this.handleInputChange} className="form-control" id="ex3" type="text" placeholder="Giá" require="true" />
                            </div>
                            <div className="col-2">
                                <label htmlFor="ex3">NSX</label>
                                <input name="sp_nsx" value={sp_nsx} onChange={this.handleInputChange} className="form-control" id="ex3" type="text" placeholder="NSX" require="true" />
                            </div>
                            <div className="col-2">
                                <label htmlFor="ex3">HSD</label>
                                <input name="sp_hsd" value={sp_hsd} onChange={this.handleInputChange} className="form-control" id="ex3" type="text" placeholder="HSD" require="true" />
                            </div>
                            <div className="col-1">
                                <label htmlFor="ex4">Xác nhận</label>
                                <button onClick={() => { if (window.confirm('Bạn có muốn sửa sản phẩm này?')) this.handleSubmit.bind(this) } } type="submit" className="btn btn-primary" id="ex4" value="Submit">Submit</button>
                                {this.state.alert}
                            </div>
                            <div className="col-1">
                                <label htmlFor="ex5">Hủy bỏ</label>
                                <button onClick={onShow} type="button" className="btn btn-dark" id="ex5">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            );
        }

      return (
            <div className="col-xs-2">
                <button style={{width: '150px'}} onClick={onShow} type="button" className="btn btn-info">{valueForm}</button>
                {showForm}
            </div>
      );
    }
  }
  
  export default Form;
