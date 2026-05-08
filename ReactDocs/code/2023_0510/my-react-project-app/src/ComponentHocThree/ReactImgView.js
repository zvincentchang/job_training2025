import React, { Component } from 'react';
import reactImg from '../IMG/logo-react-js.jpg';

class ReactImgView extends Component {

    render() {

        const{ open, toggleOpen } = this.props;

        return (
            <div>
               <h3>{this.props.topField}</h3>
               <button onClick={toggleOpen}>ReactImgView</button>
               <br/>
               { open && <img src={reactImg}/> }               
            </div>
        );
    }
}

export default ReactImgView;