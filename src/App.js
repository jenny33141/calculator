import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    h1: ""
    // h1: ["0", "1", "2", "3","4", "5", "6", "7", "8", "9", ".", "-", "+","*", "/", "=", "AC" ]
    } 

    clickOne = (num) => {
      let sum = this.state.h1
      sum += num
      
      this.setState ({h1: sum})
    }

clear = () => {
  // console.log ("cleared")
  this.setState({h1:""})
}

evaluate = () => {
try {
  let result = eval (this.state.h1)
this.setState({h1:result})
} catch (error) {
  console.log(error)
}
}


  render () {
    return (
      <div className="wrapper">
      <div className="calc">
        <div className ="display">
      <h1>{this.state.h1}</h1>
      </div>
      <div className ="buttonContainer">
      <button className="button" name="1" onClick={() => this.clickOne("1")}>1</button>
      <button className="button" name="1" onClick={() => this.clickOne("2")}>2</button>
      <button className="button" name="1" onClick={() => this.clickOne("3")}>3</button>
      <button className="button" name="1" onClick={() => this.clickOne("-")}>-</button>
      <button className="button" name="1" onClick={() => this.clickOne("4")}>4</button>
      <button className="button" name="1" onClick={() => this.clickOne("5")}>5</button>
      <button className="button" name="1" onClick={() => this.clickOne("6")}>6</button>
      <button className="button" name="1" onClick={() => this.clickOne("+")}>+</button>
      <button className="button" name="1" onClick={() => this.clickOne("7")}>7</button>
      <button className="button" name="1" onClick={() => this.clickOne("8")}>8</button>
      <button className="button" name="1" onClick={() => this.clickOne("9")}>9</button>
      <button className="button" name="1" onClick={() => this.clickOne("*")}>*</button>

      <button className="button" id="clButton" name="1" onClick={this.clear}>AC</button>
      <button className="button" name="1" onClick={() => this.clickOne("0")}>0</button>
      <button className="button" name="1" onClick={() => this.clickOne(".")}>.</button>
      <button className="button" name="1" onClick={() => this.clickOne("/")}>/</button>
      <button className="button" id="equals" name="1" onClick={this.evaluate}>=</button>
      </div>
      </div>
      </div>
    )
  } 
  
}













export default App;
