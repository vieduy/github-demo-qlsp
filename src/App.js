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
