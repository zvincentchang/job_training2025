import React, { Component } from 'react';
import reactImg from '../IMG/logo-react-js.jpg';
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

        // block:顯示、none:不顯示
        const styleObj = { display: visible ? 'block' : 'none' };
        
        // 前後`頓號`表示為字串模版，透過${}抓值
        // const classObj = visible ? 'imageShow' : 'imageHide';
        const classObj = `${visible ? 'imageShow' : 'imageHide'}`; 

        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                <hr/>
                1.三元運算子、判斷式 <br/>
                {visible ?  <img src={reactImg}/> : null}
                {visible && <img src={reactImg}/>}
                <hr/>
                2.控制 style JSX 物件 <br/>
                <img style={styleObj} src={reactImg}/>
                <img style={{ display: visible ? 'block' : 'none' }} src={reactImg}/>
                <hr/>
                3.控制 className (style.css) <br/>
                <img className={classObj} src={reactImg}/>
                <img className={ `${visible ? 'imageShow' : 'imageHide'}`} src={reactImg}/>
            </div>
        );
    }
}

export default CtrlStyle;