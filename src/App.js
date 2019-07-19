import React, {Component} from 'react';
import './App.css'
class Counter extends Component {
   constructor() { 
    super();
    this.state = {
      counter: 0,
    }
  }

  Increment =()=>
  this.setState({counter:this.state.counter+1})

  Decrement =()=>
  this.setState({counter:this.state.counter-1})

  render() {
     return (
     
      <div className = "container">
      
      
      <div><h1>Counter</h1></div>
      
      <div className = "counter">
      <div>{this.state.counter}</div>
      <button type="button" {this.state.increment}>Increment</button>
      <button type="button">Decrement</button>
      
      
      </div>
      </div>
    )
    }
  }


export default Counter