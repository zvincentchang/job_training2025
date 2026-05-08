import React, { Component } from "react";

// 下層組件
class Item extends Component {    
    render(){
        return (
             <li>{this.props.children}</li>
        )
    }
}

export default Item;