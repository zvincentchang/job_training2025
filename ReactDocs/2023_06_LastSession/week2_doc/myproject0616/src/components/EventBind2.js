import React, { Component } from 'react'
class EventBind2 extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
  }

  clickHandler = (param) => {
    this.setState({message:param})
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler("Goodbye2")}>Click</button>
      </div>
    )
  }
}
export default EventBind2
