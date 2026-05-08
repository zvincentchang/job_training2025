import React, { Component, PureComponent } from 'react';

// class PureItem extends Component {
class PureItem extends PureComponent {
    render() {
        console.log("PureItem render !!!");
        const { info } = this.props;
        return (
            <li>{info.userID} / {info.name} / {info.price} / {info.teacher}</li>
        );
    }
}

export default PureItem;