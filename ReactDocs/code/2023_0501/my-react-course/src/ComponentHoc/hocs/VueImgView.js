import React, { Component } from 'react';
import vueImg from '../IMG/logo-vue-js.jpg';

class VueImgView extends Component {
    
    // 共用HOC組件'hocs/withOpen.js'(open, toggleOpen)
    // HocAppOne 最上層組件(topField)
    render() {
        const { open, toggleOpen, topField } = this.props;
        return (
            <div>
                <h3>{topField}</h3>
                <button onClick={toggleOpen}>VueImgView</button>
                <br/>
                {open && <img src={vueImg}/>}
            </div>
        );
    }
}

export default VueImgView;