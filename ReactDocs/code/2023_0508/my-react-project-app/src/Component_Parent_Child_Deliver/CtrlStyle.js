import React, { Component } from 'react';
import reactImg from '../IMG/logo-react-js.jpg';
import vueImg from '../IMG/logo-vue-js.jpg';
import '../CSS/style.css';

class CtrlStyle extends Component {

    state = {
        visible: true
    };

    toggle = () => {
        this.setState({
            visible: !this.state.visible
        });
    };

    render() {
        const { visible } = this.state;

        const styleObj = { display: visible ? 'block':'none' };

        // const classObj = visible ? 'imageShow' : 'imageHide';
        const classObj = `${visible ? 'imageShow' : 'imageHide' }`;

        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                
                <h3>1. 三元運算子、判斷式</h3>
                {visible ? <img src={reactImg}/> : <img src={vueImg}/>}
                {visible ? <img src={reactImg}/> : null}
                {visible && <img src={reactImg}/> }
                <hr/>

                <h3>2. 控制 style JSX 物件</h3>
                <img src={reactImg} style={ styleObj } />
                <img src={reactImg} style={ { display: visible ? 'block':'none' } } />
                <hr/>

                <h3>3. 控制 className</h3>
                <img src={reactImg} className={classObj} />

            </div>
        );
    }
}

export default CtrlStyle;