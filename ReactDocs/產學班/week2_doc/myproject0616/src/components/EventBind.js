import React, { Component } from 'react'
class EventBind extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello'
    }
    this.clickHandler2=this.clickHandler2.bind(this);
  }
  clickHandler = () => {
    this.setState({message:'Goodbye'})
  }
  clickHandler2(){
    this.setState({message:'Goodbye'});
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler2}>Click</button>
      </div>
    )
  }
}
export default EventBind

