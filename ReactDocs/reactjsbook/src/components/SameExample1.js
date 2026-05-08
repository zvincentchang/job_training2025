import React from 'react';
const infoMap= {
    beginInfo:'您已经单击了',
    endInfo:'次按钮。',
    btnInfo:'计数器',
}
export default class SameExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div>
                <p>{infoMap.beginInfo}{this.state.count}{infoMap.endInfo}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    {infoMap.btnInfo}
                </button>
            </div>
        );
    }
}