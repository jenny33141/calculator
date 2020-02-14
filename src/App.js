import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    h1: 0
    }

    clickOne = () => {
      this.setState ({h1:this.state.h1 + 1})
    }

  render () {
    return (
      <div>
      <h1>{this.state.h1}</h1>
      
      </div>
    )
  } 
  
}













export default App;
