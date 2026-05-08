import React, { Component, PureComponent } from "react";

// 下層組件
// class PureItem extends Component {
class PureItem extends PureComponent {
    // PureComponent:若props沒有改變則不會重新render
    render(){
        console.info('PureItem render!', this.props.info.name);
        return <li>{this.props.info.userID} : {this.props.infoConent}</li>
    }

}

export default PureItem;