import React, { Component } from 'react';

class Title extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const newAcc = this.state;
        this.props.onLogin(newAcc);
        event.preventDefault();
    }

    render(){
      return (
        <div className="col-md-6 login-form-1">
            <h3>Login</h3>
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="form-group col-md-4">
                    <input name="user" type="text" className="form-control" placeholder="Your Email *" value={this.state.user} onChange={this.handleInputChange} />
                </div>
                <div className="form-group col-md-4">
                    <input name="password" type="text" className="form-control" placeholder="Your Password *" value={this.state.password} onChange={this.handleInputChange} />
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" className="btnSubmit" value="Login" onClick={() => this.handleSubmit.bind(this)}/>
                </div>
                <div className="form-group col-md-offset-3 col-md-4">
                    <a href="#/" className="ForgetPwd">Forget Password?</a>
                </div>
            </form>
        </div>
      );
    }
  }
  
  export default Title;