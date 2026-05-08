import React, { Component } from 'react';
import reactImg from '../IMG/logo-react-js.jpg';

class ReactImgView extends Component {
    
    // 共用HOC組件'hocs/withOpen.js'(open, toggleOpen)
    // HocAppOne 最上層組件(topField)
    render() {
        const { open, toggleOpen, topField } = this.props;
        return (
            <div>
                <h3>{topField}</h3>
                <button onClick={toggleOpen}>ReactImgView</button>
                <br/>
                {open && <img src={reactImg}/>}
            </div>
        );
    }
}

export default ReactImgView;