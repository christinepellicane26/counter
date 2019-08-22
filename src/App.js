import React, {Component} from 'react';
import './App.css'
class Counter extends Component {
   constructor() { 
    super()
    this.state = {
      counter: 0
    }
  }
  

  Reset =()=>
  this.setState({counter:this.state.counter=0})
  
  Increment =()=>
  this.setState({counter:this.state.counter+1})

  Decrement =()=> {
  // this.setState({counter:this.state.counter-1});
  if(this.state.counter > 0) {
    this.setState({
      counter: this.state.counter -1,
    })
  }
}

  timesThree =()=> {
  // this.setState({counter:this.state.counter*3})
  if (this.state.counter < 1e19) {
    this.setState({
      counter: this.state.counter*3,
    })
  }
  }

  render() {
    
     return (
            
      <div className = "container">
      
      
      <div><h1>Counter</h1></div>
      
      <div className = "counter">
      <div>{this.state.counter}</div>
      

      <button type="button" onClick={this.Reset}>Reset</button>
      <button type="button" onClick={this.Increment}>Increment</button>
      <button type="button" onClick={this.Decrement}>Decrement</button>
      <button type="button" onClick={this.timesThree}>Times Three</button>
      
      
      </div>
      </div>
    )
    }
  }
  

export default Counter