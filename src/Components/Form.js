import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import * as actions from './../Actions/index'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            _id: '',
            ten: '',
            mota: '',
            gia: '',
            nsx: '',
            hsd: '',
            alert: null
        };    
        this.validator = new SimpleReactValidator();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onShowForm = this.onShowForm.bind(this);
    }

    componentDidMount() {
            this.setState({
                _id: this.props.itemSelected._id,
                ten: this.props.itemSelected.ten,
                gia: this.props.itemSelected.gia,
                mota: this.props.itemSelected.mota,
                nsx: this.props.itemSelected.nsx,
                hsd: this.props.itemSelected.hsd
              });
      }

    componentWillReceiveProps(nextProps) {
        if(nextProps.itemSelected !== null) {
          this.setState({
            _id: nextProps.itemSelected._id,
            ten: nextProps.itemSelected.ten,
            gia: nextProps.itemSelected.gia,
            mota: nextProps.itemSelected.mota,
            nsx: nextProps.itemSelected.nsx,
            hsd: nextProps.itemSelected.hsd
            });
        }
        else {
            this.setState({
                _id: '',
                ten: '',
                mota: '',
                gia: '',
                nsx: '',
                hsd: ''
            });
        }
      }

      onShowForm(){
        this.props.onToggleForm();
        this.props.onClearItem({
            _id: '',
            ten: '',
            mota: '',
            gia: '',
            nsx: '',
            hsd: ''
        });
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
        event.preventDefault();
        const newItem = this.state;
         if (this.validator.allValid()) {
            if (newItem._id === ''){
                this.props.onAddProduct(newItem);
                this.onShowForm();
            }
            else {
                this.props.onEditProduct(newItem);
                this.onShowForm();
            }
        }
        else {
            this.validator.showMessages();
            this.forceUpdate();
            event.preventDefault();
        }
    }

    render(){
        const { ten, mota, gia, nsx, hsd } = this.state;
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
                                <input name="ten" className="form-control" id="ex1" type="text" placeholder="Name" value={ten} onChange={this.handleInputChange}  />
                                {this.validator.message('title', ten, 'required')}
                            </div>
                            <div className="col-3">
                                <label htmlFor="ex2">Mô Tả</label>
                                <input name="mota" value={mota} onChange={this.handleInputChange} className="form-control" id="ex2" type="text" placeholder="Mô tả" require="true" />
                            </div>
                            <div className="col-1">
                                <label htmlFor="ex3">Giá</label>
                                <input name="gia" value={gia} onChange={this.handleInputChange} className="form-control" id="ex3" type="text" placeholder="Giá" require="true" />
                            </div>
                            <div className="col-2">
                                <label htmlFor="ex3">NSX</label>
                                <input name="nsx" value={nsx} onChange={this.handleInputChange} className="form-control" id="ex3" type="text" placeholder="NSX" require="true" />
                            </div>
                            <div className="col-2">
                                <label htmlFor="ex3">HSD</label>
                                <input name="hsd" value={hsd} onChange={this.handleInputChange} className="form-control" id="ex3" type="text" placeholder="HSD" require="true" />
                            </div>
                            <div className="col-1">
                                <label htmlFor="ex4">Xác nhận</label>
                                <button onClick={() => { if (window.confirm('Bạn có muốn sửa sản phẩm này?')) this.handleSubmit.bind(this) } } type="submit" className="btn btn-primary" id="ex4" value="Submit">Submit</button>
                                {this.state.alert}
                            </div>
                            <div className="col-1">
                                <label htmlFor="ex5">Hủy bỏ</label>
                                <button onClick={() => this.onShowForm()} type="button" className="btn btn-dark" id="ex5">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            );
        }

      return (
            <div className="col-xs-2">
                <button style={{width: '150px'}} onClick={this.onShowForm} type="button" className="btn btn-info">{valueForm}</button>
                {showForm}
            </div>
      );
    }
  }
  
  const mapStatetoProps = state => {
        return {
            showForm: state.isDisplayForm,
            itemSelected: state.productSelected
        }
    }

  const mapDispatchToProps = dispatch => {
      return {
          onAddProduct: product => {
              dispatch(actions.addProductRequest(product))
          },
            onToggleForm: () => {
            dispatch(actions.toggleForm());
          },
            onEditProduct: product => {
                dispatch(actions.editProductRequest(product));
          },
            onClearItem: item => {
                dispatch(actions.isSelected(item));
          }
      }
  }


  export default connect(mapStatetoProps, mapDispatchToProps)(Form);
