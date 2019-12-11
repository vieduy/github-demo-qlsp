import React, { Component } from 'react';
import Title from './Components/Title';
import List from './Components/List';
import Form from './Components/Form';

class Productpage extends Component {
  render(){
    return (
      <div>
        <Title/>
        <hr/>
        <Form />
        <br/>
        <List />
      </div>
    );
  }
}

export default Productpage;