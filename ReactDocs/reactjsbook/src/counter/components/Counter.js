import React from "react";
export default class Counter extends React.Component {
    render() {
        const {title,info,value,onIncClick,onDecClick}=this.props;
        return (
            <div>
                <h1>{title}</h1>
                <span>{info}{value}</span>
                <br />
                <button type="button" onClick={onIncClick}>加一</button>
                <button type="button" onClick={onDecClick}>减一</button>
            </div>
        )
    }
}