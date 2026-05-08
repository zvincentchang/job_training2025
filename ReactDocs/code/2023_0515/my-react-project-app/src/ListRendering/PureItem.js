import React, { Component, PureComponent } from "react";

// 下層組件
// class PureItem extends Component {
class PureItem extends PureComponent {
    // PureComponent:若props key 沒有改變則不會重新render
    render(){
        const { info,infoConent } = this.props;
        console.info('PureItem render!', `${info.userID}:${info.name}`);
        return <li>{info.userID} : {infoConent}</li>
    }

}

export default PureItem;