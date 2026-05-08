import React, { Component } from 'react'
class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello'
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
 clickHandler() {
     console.log(this)
     this.setState({message: 'Goodbye 1'})
  }
  clickHandler2= ()=>{
    console.log(this)
    this.setState({message: 'Goodbye 2'})
 }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click 1</button>
        <button onClick={this.clickHandler2}>Click 2</button>
      </div>
    )
  }
}
export default EventBind

