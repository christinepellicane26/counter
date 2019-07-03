import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }

  render() {
     return {
      <div className = "container">
      <div className = "navbar">
      <div className = "counter">
      <h1> What do we put here??? :) </h1>
      <button type="button">Increment</button>
      <button type="button">Decrement</button>
      </div>
      </div>
    }
  }
}



export default Counter;